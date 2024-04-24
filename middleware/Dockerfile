FROM node:alpine

RUN mkdir /middleware

WORKDIR /middleware

COPY . /middleware/

RUN npm i

EXPOSE 3000

CMD ["npm", "run","start"]