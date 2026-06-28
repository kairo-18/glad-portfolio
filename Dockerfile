FROM node:22-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["npx", "serve", "-s", "-l", "tcp://0.0.0.0:5173", "dist"]
