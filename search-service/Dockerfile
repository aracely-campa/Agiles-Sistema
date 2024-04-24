FROM node:alpine

RUN mkdir /search-service

WORKDIR /search-service

COPY . /search-service/

RUN npm i

EXPOSE 3000

CMD ["npm", "run","start"]