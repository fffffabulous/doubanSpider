const fs = require('fs')

const sendHtml = function(path, response) {
    let options = {
        encoding: 'utf-8'
    }
    path = 'template/' + path
    fs.readFile(path, options, function(err, data){
        console.log(`读取的html文件 ${path} 内容是`, data)
        response.send(data)
    })
}

const index = {
    path: '/',
    method: 'get',
    func: function(request, response) {
        let path = 'movie_index.html'
        sendHtml(path, response)
    }
}

const routes = [
    index,
]

module.exports.routes = routes
