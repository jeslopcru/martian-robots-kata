FROM node:12

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --silent

COPY . .

CMD npm start
