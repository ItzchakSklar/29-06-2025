export class Player{
    
    constructor(name){
        this.name = name;
        this.times = [];
    }
    recordTime(start,end){
        let duration = (end-start)
        this.times.push(duration)
   }
   showStats(){
    let ollTime;
    this.times.forEach(element => {
        ollTime += element;
    }); 
    console.log("total time =",ollTime);
    let average = ollTime/this.times.length;
    console.log("Average time per reddle",average)
   }
}
// Class: Player
// Tracks player info and timings.
// Properties:
// ● name
// ● times[] — array of durations per riddle

// Methods:
// ● recordTime(start, end)
// ● showStats() — display total and average time
