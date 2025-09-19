# --- build stage ---
ARG NODE_VERSION=20.14.0
FROM node:${NODE_VERSION}-slim AS build

# Habilita pnpm vía corepack (sin npm -g)
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copiamos solo manifest/lock para cachear dependencias
COPY package.json pnpm-lock.yaml ./

# Instala dependencias de forma reproducible
RUN pnpm install --frozen-lockfile

# Ahora sí, copia el resto del código
COPY . .

# Build (Nuxt/Nitro suele generar .output)
RUN pnpm run build

# --- runtime stage ---
FROM node:${NODE_VERSION}-slim

WORKDIR /app

# Copia el artefacto de build (Nitro)
COPY --from=build /app/.output ./

# Variables para Nitro/Node en prod
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

EXPOSE 3000

# Arranque Nitro
CMD ["node", "./server/index.mjs"]
