const http = require('http');

const server = http.createServer((req, res)=>{
if(req.url === '/'){
    res.end('welcome to our home page')
}
if(req.url === '/about'){
    res.end('Here is the about page')
}
res.end(`
<h1>Oops!</h1>
<p>We cant find this page man!</p>
<a href="/">home</a>
`)


})

server.listen(5000)