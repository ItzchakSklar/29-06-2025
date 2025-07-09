import { creatRiddle } from "../services/creatRiddle.js";
import { addRiddle } from "../api/Riddles.js";

const fetch = require('node-fetch')

export function creatRiddleAndSend(){

    let newRiddle = creatRiddle();
    const resolt = addRiddle(newRiddle)
    console.log(resolt.msg)

}


// fetch("https://example.com/api", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({ name: "Itzchak", age: 30 })
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.error(err))