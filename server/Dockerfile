FROM node:16-alpine

WORKDIR /server_app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
