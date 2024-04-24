FROM node:alpine

RUN mkdir /shopping-service

WORKDIR /shopping-service

COPY . /shopping-service/

RUN npm i

EXPOSE 3000

CMD ["npm", "run","start"]