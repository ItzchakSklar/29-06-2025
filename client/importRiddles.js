import {Riddle} from "./classes/Riddle.js";
import fetch from 'node-fetch';

let arrRiddles = [];


try {

  const res = await fetch('http://localhost:3000/riddles');
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

export { arrRiddles };