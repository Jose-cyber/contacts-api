FROM node:alphine
WORKDIR /usr/app
COPY package*.json .
COPY kexfile.js .
COPY src/ .
RUN npm install
CMD [ "npm","run","prd" ]