const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
require('dotenv').config();
console.log(process.env.user_id);
console.log(process.env.user_key);
const webserver = http.createServer(
    (req, res) => {
        console.log(req.headers);

        res.statusCode = 200;
        res.setHeader('content-type', 'text/plain');
        res.end('hello world my first response');
    }
)
webserver.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}/`);
})