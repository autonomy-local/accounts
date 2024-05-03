FROM node:22-alpine AS base

FROM base AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /backend

COPY package*.json  tsconfig.json src ./

RUN npm ci && \
  npm run build && \
  npm prune --production

FROM base AS runner
WORKDIR /backend

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 autonomy

COPY --from=builder --chown=autonomy:nodejs /backend/node_modules /backend/node_modules
COPY --from=builder --chown=autonomy:nodejs /backend/dist /backend/dist
COPY --from=builder --chown=autonomy:nodejs /backend/package.json /backend/package.json

USER autonomy
EXPOSE 3000

CMD ["node", "/backend/dist/index.js"]
