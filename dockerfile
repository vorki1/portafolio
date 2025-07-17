# Etapa 1: Build
FROM node:20 AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servidor web (NGINX)
FROM nginx:alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html

# Configuración para manejar rutas SPA (opcional, si usas vue-router en modo history)
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
