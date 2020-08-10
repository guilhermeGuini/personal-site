const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 8000

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.get('/articles', (request, response) => {
    if (request.method === 'GET') {
        const articles = require('./articles/index')
        response.status(200).jsonp(articles())
    }
})

server.listen(port, () => {
    console.log('JSON Server is running')
})