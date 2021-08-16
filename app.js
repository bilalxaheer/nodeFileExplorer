const http =  require('http');

const respond = require('./lib/respond.js');

const port = process.env.port || 3000;

// const hostname = '127.0.0.1';




const server = http.createServer(respond);


server.listen( port, () => {
    console.log(`listening to port: ${port}`);
});


