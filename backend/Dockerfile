FROM node:24-slim
WORKDIR /app

# Installer verktøy som trengs for å bygge native moduler (SQLite)
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

CMD ["node", "dist/server.js"]