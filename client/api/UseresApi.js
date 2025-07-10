// import User from "../classes/Player";
import fetch from 'node-fetch';

const PORT = process.env.PORT || 3005;


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

