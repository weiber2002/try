//docker images 查看 有什麼docker
//docker run --name  {name} {name} ( a 命名, b 參考image) &&  name: v1  加上tag v1
//docker run -p a:b 指定container 和 output 的port (對外的比較重要)
//docker run -d  detached 讓其在background 運行
//docker ps 查看running 的 container
//docker stop a  停止running 某docker
//docker ps -a see all container
//docker start {name}  run container
//docker build -t {name}  build a image
//docker image rm 刪除一個image
//docker container rm  刪除container
//docker system prune 刪除一堆東西
//docker run  --rm 當container 停止運作時就刪掉
//docker run  -v  volume
// -v C:\docker\docker-crash-course-lesson-5\api:/app 給出絕對路徑 和 在container中的路徑 對應，用來隨時更新
// -v /app/node_modules  module 額外存
//docker-compose up 運行docker-compose
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1fasas",
      "title":"Book Review: The Bear & The Nightingale"
    },
    {
      "id":"100000",
      "title":"Game Review: Pokemon Brillian Diamond"
    },
    {
      "id":"3fdafssf",
      "title":"Show Review: Alice in Borderland"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})