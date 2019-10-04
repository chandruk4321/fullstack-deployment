FROM node:10.16.3

# create directories
RUN mkdir -p /usr/src/application

# copy files
COPY . /usr/src/application
WORKDIR /usr/src/application
RUN npm install

RUN ls ./node_modules/.bin
RUN ./node_modules/.bin/gulp build

ENV NODE_ENV=production
ENV PORT=3000

# expose app port (map with docker daemon)
EXPOSE 3000
CMD node dist/server/app.js