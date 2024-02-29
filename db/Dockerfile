FROM postgres:16-alpine

USER root

RUN apk --no-cache upgrade
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

USER postgres

EXPOSE 5432

ENTRYPOINT ["/entrypoint.sh"]
