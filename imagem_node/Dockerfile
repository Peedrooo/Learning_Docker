FROM node

WORKDIR /src

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 1000

CMD ["node", "app.js"]
