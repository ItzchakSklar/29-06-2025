import {
    runGame,
    creatRiddleAndSend,
    ShowAllRiddles,
    UpdateExistingRiddle,
    DeleteRiddle,
    ViewleaderBoard
 } from "./importUtilsSwitch.js"

export default async function switchChoice(Choice,player){
    switch (Choice){
        case "1":{
            
            await runGame(player);
            return true;  
        }
        case "2":{
            await creatRiddleAndSend();
            return true;        
        }
        case "3":{
            await ShowAllRiddles();
            return true;        
        }
        case "4":{
            await UpdateExistingRiddle();
            return true;        
        }
        case "5":{
            await DeleteRiddle();
            return true;        
        }
        case "6":{
            await ViewleaderBoard();
            return true;        
        }
        case "7":{
            return false;        
        }
    }
}

// What do you want to do?
// 1. Play the game         !
// 2. Create a new riddle   !
// 3. Read all riddles      !
// 4. Update an existing riddle !
// 5. Delete a riddle       !
// 6. View leaderboard      !
// 7. Exit                  !