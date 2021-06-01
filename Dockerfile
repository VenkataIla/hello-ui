FROM node:14

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "app.js" ]