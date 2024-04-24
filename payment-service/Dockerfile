FROM node:alpine

RUN mkdir /payment-service

WORKDIR /payment-service

COPY . /payment-service/

RUN npm i

EXPOSE 3000

CMD ["npm", "run","start"]