FROM node:9-slim
WORKDIR /app
COPY package.json .
RUN npm install 
# RUN  npm install nodemon -g
COPY . .
CMD ["npm","start"]