FROM node:18-alpine3.18
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
RUN npm install -g pnpm@9.2.0
WORKDIR /sizov-project-2
COPY . .
RUN pnpm i