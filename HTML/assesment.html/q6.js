 function CreateIdGenerator() {
     let id = 0;
     return function() {
         id ++;
         return id;
     };
    }
    const gen = CreateIdGenerator();
    console.log(gen());
    console.log(gen());
    console.log(gen());