import {Riddle} from "../classes/Riddle.js";
import fetch from 'node-fetch';

const PORT = process.env.PORT || 3005;



export async function ShowAllRiddles(){

  let arrRiddles = [];

  try {

  const res = await fetch(`http://localhost:${PORT}/riddles/all`);
  const data = await res.json();  

  // const parsed = JSON.parse(data);
  arrRiddles = parsed.map(r =>
  new Riddle(r.id, r.name, r.taskDescription, r.correctAnswer)
  );

  console.log("Loaded riddles:");
} catch (err) {
  console.error("Error:", err);
}
return arrRiddles
};



export async function addRiddle(newRiddle){
    const result = await fanch(`http://localhost:${PORT}/riddles/add`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRiddle)
    })
    return result;
}

export async function CheckRiddelIfExist(IDRiddle){
    const result = await fanch(`http://localhost:${PORT}/riddles/ChackID`,{
        method: "GET"
    })
    if (result === "true"){return true;}
    if (result === "false"){return false;}
    console.log("a problem in the enswer")
    return false;
}

export async function updateRiddelName(IDRiddle, newname){
    const result = await fanch(`http://localhost:${PORT}/riddles/name`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"ID":IDRiddle,"Name": newname})
    })

    if (result === "true"){ console.log("the Name update suscefuly"); return true;}
    if (result === "false"){console.log("a problem server to update Name"); return false;}

    console.log("a problem in the server enswer")
    return false;
}

export async function updateRiddelDescription(IDRiddle, newDescription){
    const result = await fanch(`http://localhost:${PORT}/riddles/Description`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"ID":IDRiddle,"Description": newDescription})
    })
    
    if (result === "true"){ console.log("the Description update suscefuly"); return true;}
    if (result === "false"){console.log("a problem server to update Description"); return false;}

    console.log("a problem in the server enswer")
    return false;
}

export async function updateRiddelAnswer(IDRiddle, newAnswer){
    const result = await fanch(`http://localhost:${PORT}/riddles/Answer`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"ID":IDRiddle,"Answer": newAnswer})
    })
    
    if (result === "true"){ console.log("the Answer update suscefuly"); return true;}
    if (result === "false"){console.log("a problem server to update Answer"); return false;}

    console.log("a problem in the server enswer")
    return false;
}

export async function DeleteRiddleApi(IDRiddle){
    const result = await fanch(`http://localhost:${PORT}/riddles/Answer`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"ID":IDRiddle})
    })
    
    if (result === "true"){ console.log("the Riddle Delete suscefuly"); return true;}
    if (result === "false"){console.log("a problem server to Delete Riddle"); return false;}

    console.log("a problem in the server enswer")
    return false;
}


// CheckRiddelIfExist         !
// updateRiddelName,          !
// updateRiddelDescription,   !
// updateRiddelAnswer         !
// DeleteRiddleApi            !


// export async function updateArrRiddles(){

//   let arrRiddles = [];

//   try {

//   const res = await fetch(`http://localhost:${PORT}/riddles`);
//   const data = await res.json();  
//   // const data = await fs.readFile("./riddles/db.txt", "utf-8");

//   const parsed = JSON.parse(data);
//   arrRiddles = parsed.map(r =>
//   new Riddle(r.id, r.name, r.taskDescription, r.correctAnswer)
//   );

//   console.log("Loaded riddles:");
// } catch (err) {
//   console.error("Error:", err);
// }
// return arrRiddles
// };