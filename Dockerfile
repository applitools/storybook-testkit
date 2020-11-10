FROM alekzonder/puppeteer
COPY --chown=pptruser  . .
RUN yarn install
CMD npm run test:visual