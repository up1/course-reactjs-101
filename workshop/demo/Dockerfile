FROM node:21-alpine3.19 as step01
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.25.3-alpine
COPY --from=step01 /app/dist /usr/share/nginx/html