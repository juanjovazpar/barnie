# Stage 1: Build the application
# FROM node:20-slim AS builder
# WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm ci
# COPY . .
# RUN npx nx build api-core --prod

# Stage 2: Serve the application
# FROM node:20-slim
# WORKDIR /app
# COPY --from=builder /app/dist/apps/api-core ./dist
# EXPOSE 3000
# CMD ["node", "dist/main.js"]

FROM node:20-slim as development

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build:api-core

FROM node:20-slim as production

ENV NODE_ENV=production
ENV PORT=3330

EXPOSE ${PORT}

USER node
WORKDIR /app

COPY --from=development /app/dist/apps/api-core ./
RUN npm install --only=production

CMD ["node", "main"]