import http from "http";
import {getAllRiddles} from '../services/riddles.services.js';

const POST = 3000;

const server = http.createServer((req,res) =>{
    if (req.method === "GET" && req.url === "/riddles") {
        const riddles = getAllRiddles();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(riddles));
        res.end();

    }
})

server.listen(POST, () => {
    console.log("Server runing on port:"+POST);
})