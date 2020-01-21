FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/frontend
WORKDIR /srv/app/frontend

COPY package.json /srv/app/frontend
COPY package-lock.json /srv/app/frontend

RUN yarn install

COPY . /srv/app/frontend

CMD [ "yarn", "start" ]
