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

// 
// function getData(dataID, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(dataID);
//             resolve("success");
// if(getNextData){
//     getNextData();
// }
//         }, 1000);
//     });
// }
// getid(1, getNextData=>{
//     getid(2, getNextData=>{
//         getid(3, getNextData=>{
//             getid(4, getNextData=>{
//                 getid(5, null);
//             });

//         });
//     });
// });

function getData(dataID){
    setTimeout(() => {
        console.log(dataID)
    }, 2000);

        }

async function fetchData(){

    // await getData(1);
    // await getData(2);
    // await getData(3);
    // await getData(4);
    // await getData(5);
}
fetchData();

