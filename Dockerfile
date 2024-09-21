FROM node:latest

WORKDIR /usr/src/app

VOLUME /usr/src/app
VOLUME /usr/src/app/node_modules
VOLUME /usr/src/app/src/data

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]