FROM node:18.17.0-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 4075

CMD yarn start