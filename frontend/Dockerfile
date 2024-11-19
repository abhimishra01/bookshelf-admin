FROM node:20 as build
WORKDIR /app
COPY package*.json ./
COPY . .

RUN npm install -g pnpm \
&& pnpm install \
&& pnpm run build \
&& npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]