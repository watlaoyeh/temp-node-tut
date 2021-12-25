const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/')
    {
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about')
    {
        res.end('Here is our short history')
    }
    else
    {
        res.end(`
        <h1>Ooops!</h1>
        <p>We cant find the page</p>
        <a href="/">Home page</a>
        `)
    }
})

server.listen(5000)