# =========================
# Etapa 1 — Build
# =========================
FROM node:20 AS build

ARG APP_NAME

WORKDIR /app

# Copia tudo direto (evita bug do lockfile cross-platform)
COPY . .

# Instala dependências dentro do Linux
RUN npm install

# Builda apenas a aplicação desejada
RUN npm run build --workspace=${APP_NAME}


# =========================
# Etapa 2 — Nginx
# =========================
FROM nginx:alpine

ARG APP_NAME

COPY --from=build /app/packages/${APP_NAME}/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]