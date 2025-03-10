const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export const getImageUrl = (url: string) => {
  return `${IMAGE_URL}${url}`;
};
