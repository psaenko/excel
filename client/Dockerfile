FROM node:16.14.2-alpine AS build
WORKDIR /app
EXPOSE 8080
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.23.2-alpine AS prod-stage
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]
