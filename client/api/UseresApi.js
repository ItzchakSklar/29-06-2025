// import User from "../classes/Player";
import fetch from 'node-fetch';

const PORT = process.env.PORT || 3005;

export function User(Name) {
    const result = fanch(`http://localhost:${PORT}/riddles/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"name":Name})
    })

}


export async function ViewleaderBoardApi() {

    let arrLeaders = [];

    try {

        const res = await fetch(`http://localhost:${PORT}/leader`);
        const data = await res.json();

        return data;

    } catch (err) {
        console.error("Error fetching leaderboard:", err);
        return [];
    }
}

