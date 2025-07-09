import http from "http";
import {getAllRiddles,addRiddle} from '../services/riddles.services.js';

const PORT = 3000;

const server = http.createServer((req,res) =>{
    if (req.method === "GET" && req.url === "/riddles") {
        const riddles = getAllRiddles();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(riddles));
        res.end();
    }
    if (req.method === "POST" && req.url === "/riddles/add"){
        const riddles = addRiddle();
    }
})

server.listen(PORT, () => {
    console.log("Server runing on port:"+PORT);
})