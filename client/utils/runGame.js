import { ChachTime } from "./timeSeconds.js";
import { GetAllRiddles } from "../api/RiddlesApi.js"

export async function runGame(player){

    const arrRiddles = await GetAllRiddles();

    // console.log("arrRiddles:", arrRiddles);

    arrRiddles.forEach(element => {
            let start = ChachTime(new Date());
            element.ask();
            let end = ChachTime(new Date());
            player.recordTime(start, end)
            player.showStats();
    })
}