FROM node:11.3.0

EXPOSE 3000

VOLUME /web/src

COPY package.json .babelrc webpack.config.js /web/

WORKDIR /web
CMD npm install && npm start
