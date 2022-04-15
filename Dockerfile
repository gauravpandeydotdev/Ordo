FROM node:14-alpine as base

RUN apk add python3-dev
RUN apk add py3-pip

RUN apk add libc-dev
RUN apk add g++
RUN pip install yt-dlp==2022.3.8.2

RUN apk add ffmpeg

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