FROM node:20.10.0 AS builder

WORKDIR /usr/src/app

COPY ../../package.json ./ 
COPY ../../package-lock.json ./ 

RUN npm install --production

COPY . .

RUN npm run build:api-core

FROM node:20.10.0 AS runtime

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist/apps/api-core ./dist

COPY ../../package.json ./
COPY ../../package-lock.json ./
RUN npm install --production

EXPOSE 3000

CMD ["node", "dist/main.js"]