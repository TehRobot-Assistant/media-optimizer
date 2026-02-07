FROM node:20-alpine

LABEL org.opencontainers.image.source="https://github.com/TehRobot-Assistant/media-optimizer"
LABEL org.opencontainers.image.description="Analyze Sonarr/Radarr libraries for space hogs and codec upgrades"
LABEL org.opencontainers.image.licenses="MIT"

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY server.mjs ./
COPY public ./public

EXPOSE 3000

USER node

CMD ["node", "server.mjs"]
