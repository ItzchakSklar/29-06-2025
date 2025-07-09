import { getAllRiddlesdb } from "../dal/riddles.dal.js"

function getAllRiddles(){
    const data = getAllRiddlesdb();
    return data;
}

function addRiddle(){

}

export {getAllRiddles,addRiddle}