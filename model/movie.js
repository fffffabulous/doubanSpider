const fs = require('fs')

const movieFilePath = 'db/movie.json'

const loadMovies = () => {
    let content = fs.readFileSync(movieFilePath, 'utf8')
    let ms = JSON.parse(content)
    return ms
}

const m = {
    data: loadMovies()
}

m.all = function() {
    let ms = this.data
    return ms
}

// 导出一个对象的时候用 module.exports = 对象 的方式
// 这样引用的时候就可以直接把模块当这个对象来用了(具体看使用方法)
module.exports = m
