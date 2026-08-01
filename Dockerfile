# frontend/Dockerfile
FROM node:22-slim AS builder

WORKDIR /app

# Копируем package.json
COPY package*.json ./
RUN npm ci

# Копируем исходники
COPY . .

# Собираем с правильным base path
RUN npm run build

# Второй этап - nginx для отдачи статики
FROM nginx:alpine

# Копируем собранные файлы
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем кастомный nginx конфиг для SPA
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    location /constructor/ { \
        alias /usr/share/nginx/html/; \
        try_files $uri $uri/ /constructor/index.html; \
    } \
    location / { \
        return 404; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]