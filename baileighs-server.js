require('dotenv').config();

const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;
const host = process.env.HOST;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

let server = createServer((req, res)=>{
    console.log('Thanks for requesting')
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('You Rock');
});

server.listen(port, host, ()=> {
    console.log('Server is listening ${host}:${port}')
});