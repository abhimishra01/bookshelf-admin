FROM node:20 as build
WORKDIR /app
COPY package*.json ./
COPY . .
RUN pnpm install && pnpm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]