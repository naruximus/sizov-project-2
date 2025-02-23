import ky from 'ky';
import { z } from 'zod';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type EndpointConfig<
  TResponse extends z.ZodTypeAny,
  TBody extends z.ZodTypeAny = z.ZodVoid,
  TQuery extends z.ZodTypeAny = z.ZodVoid,
> = {
  method: HttpMethod;
  endpoint: string;
  responseSchema: TResponse;
  bodySchema?: TBody;
  querySchema?: TQuery;
};

const replaceUrlParams = (url: string, params: Record<string, string | number>) => {
  return url.replace(/{([^}]+)}/g, (_, key) => String(params[key]));
};

const createQueryString = (query: Record<string, unknown>) => {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.append(key, String(value));
    }
  });
  return params.toString();
};

const normalizeEndpoint = (endpoint: string) => {
  return endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
};

export const createApi = <
  TResponse extends z.ZodTypeAny,
  TBody extends z.ZodTypeAny = z.ZodVoid,
  TQuery extends z.ZodTypeAny = z.ZodVoid,
>(
  config: EndpointConfig<TResponse, TBody, TQuery>,
) => {
  const api = ky.create({
    prefixUrl: API_URL,
  });

  return async (options?: {
    body?: z.infer<TBody>;
    query?: z.infer<TQuery>;
    params?: Record<string, string | number>;
  }): Promise<z.infer<TResponse>> => {
    // Validate body if provided
    if (options?.body && config.bodySchema) {
      config.bodySchema.parse(options.body);
    }

    // Validate query if provided
    if (options?.query && config.querySchema) {
      config.querySchema.parse(options.query);
    }

    // Process URL
    let url = normalizeEndpoint(config.endpoint);

    if (options?.params) {
      url = replaceUrlParams(url, options.params);
    }
    if (options?.query) {
      const queryString = createQueryString(options.query);
      if (queryString) {
        url = `${url}?${queryString}`;
      }
    }

    // Make request
    const response = await api(url, {
      method: config.method,
      json: options?.body,
      cache: 'no-store',
    }).json();

    // Validate and return response
    return config.responseSchema.parse(response);
  };
};
