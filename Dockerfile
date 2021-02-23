FROM node:lts-alpine3.13

RUN mkdir app

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 7244

CMD node server.js
