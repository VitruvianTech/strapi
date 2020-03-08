FROM strapi/base

ARG VERSION
RUN yarn global add strapi@${VERSION}

WORKDIR /srv/app

COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["strapi", "develop"]