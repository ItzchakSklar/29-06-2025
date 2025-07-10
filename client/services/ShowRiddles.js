import { GetAllRiddles } from "../api/RiddlesApi.js";

export async function ShowAllRiddles() {
    const riddles = await GetAllRiddles();

    // console.log(riddles.length)

    riddles.forEach((riddle, index) => {
        console.log(`Riddle ${index + 1}:`);
        for (const key in riddle) {
            console.log(`  ${key}: ${riddle[key]}`);
        }
    });
}