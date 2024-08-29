FROM node:20-bullseye

WORKDIR /app
COPY . /app

RUN npm install -y

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
