import readline from "readline-sync";
import { CheckRiddelIfExist,DeleteRiddleApi } from "../api/RiddlesApi.js";

export default async function DeleteRiddle(){

    const id = readline.question("enter id of riddle you want to delete:");
    const exist = await CheckRiddelIfExist(id);

    if (!exist) {console.log("Riddel dont exist"); return;};
    
    await DeleteRiddleApi(id);
}


// DeleteRiddleApi !