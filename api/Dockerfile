FROM node:17-alpine

WORKDIR /app

COPY . . 
# 前者是複製來源，後者是要複製到的地方， workdir能給定參考目錄

RUN npm install

EXPOSE 4000
# required for docker desktop port mapping

CMD ["node", "app.js"]