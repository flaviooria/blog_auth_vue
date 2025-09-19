# --- build stage ---
ARG NODE_VERSION=20.14.0
ARG PNPM_VERSION=9.12.0
FROM node:${NODE_VERSION}-slim AS build

# Opcional pero recomendado si tu CI/proxy tiene TLS estricto
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates \
  && rm -rf /var/lib/apt/lists/*

# Instala pnpm de forma explícita (sin corepack prepare)
RUN npm install -g pnpm@${PNPM_VERSION} --no-fund --no-audit
RUN pnpm --version

WORKDIR /app

# Copia solo manifests para cachear dependencias
COPY package.json pnpm-lock.yaml ./

# Instala deps exactamente como en el lockfile
RUN pnpm install --frozen-lockfile

# Copia el resto del código
COPY . .

# Compila Nuxt (Nitro genera .output)
RUN pnpm run build

# --- runtime stage ---
FROM node:${NODE_VERSION}-slim

ENV NODE_ENV=production
WORKDIR /app

# Copiamos el artefacto de build de Nitro
COPY --from=build /app/.output ./

# Ajustes del servidor Nitro
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

# Arranque Nitro
CMD ["node", "./server/index.mjs"]
