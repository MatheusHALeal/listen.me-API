FROM node:9-slim
WORKDIR /app
COPY package.json /app
RUN  npm install nodemon -g
RUN npm install 
CMD ["npm", "start"]