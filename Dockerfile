FROM node:22-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["npx", "serve", "-l", "5173", "-L", "0.0.0.0", "dist"]
