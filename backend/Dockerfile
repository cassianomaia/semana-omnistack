FROM node:10

RUN mkdir -p /srv/app/backend
WORKDIR /srv/app/backend

COPY package.json /srv/app/backend
COPY yarn.lock /srv/app/backend

RUN yarn install

COPY . /srv/app/backend

CMD ["yarn", "dev"]
