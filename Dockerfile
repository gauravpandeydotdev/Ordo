FROM node:14-alpine as base

WORKDIR /src
COPY package*.json /src

EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["npx", "run-p", "prod:*"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install
COPY . /
EXPOSE 9229
CMD ["npx", "npm-run-all", "dev:*", "--parallel"]