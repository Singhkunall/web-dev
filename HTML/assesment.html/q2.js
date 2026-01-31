function scoreTracker() {
    let score = 0;
    return{
        
    
        addscore: p => score += p,
        getscore: () => score
    };
}
let k = scoreTracker();
k.addscore(10);
console.log(k.getscore());