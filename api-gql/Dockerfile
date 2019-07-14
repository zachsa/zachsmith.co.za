FROM node:12-alpine
WORKDIR /app
COPY package.json .
RUN npm install --quiet
COPY . .
EXPOSE 4000
CMD [ "npm", "start" ]