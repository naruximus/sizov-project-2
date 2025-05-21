FROM node:18-alpine
RUN apk add --no-cache bash libc6-compat
RUN npm install -g pnpm@9.2.0
RUN mkdir /sizov
WORKDIR /sizov
COPY ../.. /sizov
RUN pnpm i