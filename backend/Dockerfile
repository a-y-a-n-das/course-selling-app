FROM node:24-slim AS builder
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    libstdc++6 \
    && rm -rf /var/lib/apt/lists/*


    
COPY package*.json ./
    
RUN npm ci --omit=dev
    
COPY . ./
    
FROM node:24-slim AS runner
WORKDIR /usr/src/app

ENV NODE_ENV=production

RUN apt-get update && apt-get install -y \
    libstdc++6 \
    && rm -rf /var/lib/apt/lists/*

RUN groupadd -r appgroup && useradd -r -g appgroup -m -d /home/appuser appuser \
&& mkdir -p /usr/src/app \
&& chown -R appuser:appgroup /usr/src/app


COPY --from=builder /usr/src/app ./

EXPOSE 5000

USER appuser

CMD ["node", "server.js"]
