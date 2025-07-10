import readline from "readline-sync";
import { CheckRiddelIfExist, updateRiddelName, updateRiddelDescription,updateRiddelAnswer } from "../api/RiddlesApi.js"; // return True Or folse

export function UpdateExistingRiddle(){
    const IDriddel = readline.question('Enter Id: ');
    const exist = CheckRiddelIfExist(IDriddel);

    // if riddel id dont exist
    if (!exist) {console.log("Riddel dont exist"); return;}

    const Choise = readline.question('Enter what do you wont to update\n1 name\n2 task Description\n3 correct Answer :');
    switch (Choise) {
        case "1":{
            const name = readline.question("Enter new name:")
            updateRiddelName(IDriddel,name)
        }
        case "2":{
            const Description = readline.question("Enter new task Description:")
            updateRiddelDescription(IDriddel,Description)
        }
        case "3":{
            const Answer = readline.question("Enter new correct Answer:")
            updateRiddelAnswer(IDriddel,Answer)
        }
    }
}
