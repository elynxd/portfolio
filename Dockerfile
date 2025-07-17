FROM node:22-alpine AS base
# Enable pnpm
RUN corepack enable pnpm

FROM base AS deps
WORKDIR /app
# Copy only dependency files first (better Docker layer caching)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS deps-prod
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

FROM base AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

FROM base AS runner
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY --from=deps-prod /app/node_modules ./node_modules
COPY --from=builder /app/build ./build

EXPOSE 3000
CMD ["pnpm", "run", "start"]