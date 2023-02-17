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
//docker prune 刪除一堆東西
//d
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Book Review: The Bear & The Nightingale"
    },
    {
      "id":"2",
      "title":"Game Review: Pokemon Brillian Diamond"
    },
    {
      "id":"3",
      "title":"Show Review: Alice in Borderland"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})