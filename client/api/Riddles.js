import {Riddle} from "../classes/Riddle.js";
import fetch from 'node-fetch';

const PORT = process.env.PORT || 3005;


export async function updateArrRiddles(){

  let arrRiddles = [];

  try {

  const res = await fetch(`http://localhost:${PORT}/riddles`);
  const data = await res.json();  
  // const data = await fs.readFile("./riddles/db.txt", "utf-8");

  const parsed = JSON.parse(data);
  arrRiddles = parsed.map(r =>
  new Riddle(r.id, r.name, r.taskDescription, r.correctAnswer)
  );

  console.log("Loaded riddles:");
} catch (err) {
  console.error("Error:", err);
}
return arrRiddles
};



export async function addRiddle(Riddle){
    const result = await fanch(`http://localhost:${PORT}/riddles/add`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRiddle)
    })
    return result;
}