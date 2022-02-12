FROM node:alpine

#a fix for newer node.js version, different from courses
WORKDIR /usr/app

#only copy package.json, because you do not need all other stuff from ./ to run npm install this way - everytime
#new files become added to ./ ./ wont re-trigger npm install
COPY ./package.json ./
RUN npm install

COPY ./ ./

CMD ["npm", "start"]

#you need to build it with tag to make it easier, e.g. 'docker build -t sauliusonis/simpleweb .'
#ports will not be mapped here, to fix it now - we will use the 'docker run -p 8080:8080 sauliusonis/simpleweb'