// 引入 express 并且创建一个 express 实例赋值给 app
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// 配置静态文件目录
app.use(express.static('static'))

const registerRoutes = function(app, routes) {
    for (let i = 0; i < routes.length; i++) {
        let route = routes[i]
        // 下面这段是重点
        app[route.method](route.path, route.func)
    }
}

// 导入 route/index 的所有路由数据
const routeIndex = require('./route/index')
registerRoutes(app, routeIndex.routes)

// 导入 route/movie 的所有路由数据
const routeMovie = require('./route/movie')
registerRoutes(app, routeMovie.routes)


const main = () => {
    let host = 'localhost'
    let port = 8000
    let server = app.listen(port, host, function () {
        console.log(`应用实例，访问地址为 http://${host}:${port}`)
    })
}

if (require.main === module) {
    main()
}