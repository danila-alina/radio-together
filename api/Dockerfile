FROM node:11.3.0

EXPOSE 3001
COPY "./package.json" "./package-lock.json" "/app/"
WORKDIR /app
RUN npm i --quiet
COPY ./src /app/src

CMD npm start