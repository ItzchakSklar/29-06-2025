import fs from "fs"

function getAllRiddlesdb(){
    const data = fs.readFileSync('../dal/db.txt', 'utf-8');
    return data;
}
export { getAllRiddlesdb }