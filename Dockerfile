FROM node:14-alpine as base

WORKDIR /src
COPY package*.json /src

EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["node", "bin/www"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . /
EXPOSE 9229
CMD ["nodemon", "--inspect=0.0.0.0:9229", "bin/www"]