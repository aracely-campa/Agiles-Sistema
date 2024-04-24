FROM node:alpine

RUN mkdir /user-service

WORKDIR /user-service

COPY . /user-service/

RUN npm i

EXPOSE 3000

CMD ["npm", "run","start"]