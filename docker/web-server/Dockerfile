FROM node:latest

WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY web-server /usr/src/app

RUN npm install
RUN npx tsc

CMD ["node", "dist/app.js"]