FROM node:20-alpine

WORKDIR /usr/src

COPY package*.json ./

COPY web-client ./web-client

COPY ui ./ui

COPY web-client/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh" ]
