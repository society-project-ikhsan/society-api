FROM node:20.11-alpine

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

CMD ["node", "dist/index.js"]