
FROM node:7.2.1-alpine

# Update
RUN apk add --update bash

# Global install yarn package manager
RUN npm set progress=false && \
    npm install -g --progress=false yarn

# Create app directory
RUN mkdir -p /usr/src/fabric.core
WORKDIR /usr/src/fabric.core

# copy package.json to container
COPY ./server/package.json /usr/src/fabric.core/package.json
RUN yarn install
COPY ./server/. /usr/src/fabric.core/

#ENV NODE_ENV staging

CMD ["npm", "start"]
