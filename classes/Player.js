export class Player{
    
    constructor(name){
        this.name = name;
        this.times = [];
    }
    recordTime(start,end){
        let duration = (end-start)
        // console.log("time",duration);
        this.times.push(duration)
   }
   showStats(){
    let ollTime = 0;
    this.times.forEach(element => {
        // console.log("cca",element)
        ollTime += element;
    }); 
    console.clear();
    console.log("total time =",ollTime, "seconds");
    let average = ollTime/this.times.length;
    console.log("Average time per reddle =",average, "seconds")
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
