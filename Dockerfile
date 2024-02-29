FROM node:21-alpine

RUN mkdir -p /app
WORKDIR /app

#COPY package*.json .
#RUN yarn install --production
#COPY ./build .

COPY . .
RUN yarn install
RUN yarn build

EXPOSE 3000
#CMD ["node", "index.js"]

CMD ["yarn", "preview", "--host", "::", "--port", "3000"]