// // let nums = [1,2,3,4];
// // let result = nums.map(num => num * 2);
// // console.log(result);

// // let nums = [10, 15, 20, 25, 30];

// // let evenNums = nums.filter(num => num % 2 === 0);

// // console.log(evenNums)

// // let nums = [5, 10, 15, 20];

// // let sum = nums.reduce((total, current) => total + current, 0);

// // console.log(sum); 

// // function bankAccount(){
// //     let balance = 1000
// //     return {withdraw(amount){
// //         if(amount<=balance){
// //             balance -= amount;
// //             console.log(balance);
// //         }else{
// //             console.log("Insufficient balance");
// //         }
// //     }

// // }}
// // const myAccount = bankAccount()
// // myAccount.withdraw(100)


// function createTimer(){
//     let seconds = 0;
//     let intervalId = null;

//     return {
//         start() {
//             if (intervalId !== null) return; // already running
//             intervalId = setInterval(() => {
//                 seconds++;
//                 console.log("Time:", seconds, "sec");
//             }, 1000);
//         },

//         stop() {
//             if (intervalId !== null) {
//                 clearInterval(intervalId);
//                 intervalId = null;
//             }
//         },

//         reset() {
//             seconds = 0;
//         }
//     };
// }

function sum(a, b){
    console.log(a+b);
    
}   

function sumAll(a, b, sumCallback){
   setTimeout(() => {
    sumCallback(a, b);
   }, 3000);
}
sumAll(1, 12, sum);