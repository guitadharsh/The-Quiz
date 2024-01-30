# set the base image to create image for the react app
FROM node:20-alpine 

# create user with permission to run the app
RUN addgroup app && adduser -S -G app app

# set the user to run app
USER app

#set the working directory
WORKDIR /app

# copy package json and package lock json file to work directory 
# this will bring before other files arrives so docker can watch is these files have changed or not ?
# if no change occur docker just use the previous package.json files existed in the docker cache memeory
COPY package*.json ./

# change ownership to root user to avoid throwing err due to mismatching directories or something....
USER root

# retur ownership to app directory
RUN chown -R app:app .

# change user back to app
USER app

# install dependencies
RUN npm install

# copy rest files to working directory
COPY . .

# expose app to a port
EXPOSE 8000

# run the app
CMD npm run dev