import fs from 'fs/promises';
import {Riddle} from "./classes/Riddle.js";

let arrRiddles = [];

try {
  const data = await fs.readFile("./riddles/db.txt", "utf-8");
  const parsed = JSON.parse(data);

  arrRiddles = parsed.map(r =>
    new Riddle(r.id, r.name, r.taskDescription, r.correctAnswer)
  );

  console.log("Loaded riddles:");
} catch (err) {
  console.error("Error:", err);
}

export { arrRiddles };