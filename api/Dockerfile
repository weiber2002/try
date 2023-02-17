FROM node:17-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json . 

# 善用cache 快速儲存區 在修改小幅檔案時可加速 ()

RUN npm install

COPY . . 
# 前者是複製來源，後者是要複製到的地方， workdir能給定參考目錄

EXPOSE 4000
# required for docker desktop port mapping

CMD ["nodemon", "app.js"]

# CMD["npm","run","dev"] dev