import { Riddle } from "../classes/Riddle"
import readline from "readline-sync";


export function creatRiddle(){

    const id = readline.question("enter id of riddle");
    const name = readline.question("emter name of riddle");
    const riddle = readline.question("enter the riddle");
    const answer = readline.question("enter the correct answer");

    return new Riddle(id,name,riddle,answer);
}
