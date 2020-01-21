FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/backend
WORKDIR /srv/app/backend

COPY package.json /srv/app/backend
COPY package-lock.json /srv/app/backend

RUN yarn install

COPY . /srv/app/backend

CMD ["yarn", "dev"]
