import { ChachTime } from "./time.js";

export function runGame(arrRiddles,player){
    arrRiddles.forEach(element => {
            let start = ChachTime(new Date());
            element.ask();
            let end = ChachTime(new Date());
            player.recordTime(start, end)
            player.showStats();
    })
}