function limit(fn, times) {
    let count = 0;
    return function(){
        if(count < times){
            count++;
            return fn();
        } else {
            //return null;
            console.log("Maxed Out");
        }

    }
}
let limitedFn = limit(function() {
    console.log("Function executed");
}, 1);

limitedFn();
limitedFn(); 