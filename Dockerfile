FROM node:18 AS base

WORKDIR /app

FROM base AS builder

COPY package*.json .babelrc ./

RUN npm install

COPY ./src ./src

RUN npm run build

RUN npm prune --production 

FROM base AS release

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000

USER node

CMD ["node", "./dist/app.js"]