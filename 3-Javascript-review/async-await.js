/**
 *  Async / Await
 */

// let getName = async () => {
//     // throw new Error("User not found");
//     return "Juan"
// }

// Set a function as 'async' is the same that the next example
// in other words, an 'async' function returns a Promise:

 let getName = () => {
     return new Promise((resolve, reject) =>{
        
        setTimeout(() => {
            resolve('Juan');            
        }, 3000)        
     })
 }

let greeting = async () => {
    
    let name =  await getName()
    
    return `Hello ${name}`
}

// getName()
//     .then(name => {
//         console.log(name);
//     })
//     .catch(err => {
//         console.log("getName error", err);
//     });

greeting()
    .then(message =>{
        console.log(message);
    })

