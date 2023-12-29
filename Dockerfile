FROM node:latest
WORKDIR /usr/app
COPY package*.json ./
COPY knexfile.js ./
COPY src/ ./src/
RUN npm install --ignore-scripts
USER node
CMD [ "npm", "run", "prd" ]