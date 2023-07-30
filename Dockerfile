FROM node:latest

WORKDIR /usr/app/
COPY package*.json .
COPY knexfile.js .

RUN npm install -g npm@9.8.1
RUN npm install --ignore-scripts

COPY src/ .
USER node

CMD [ "npm","run","prd" ]