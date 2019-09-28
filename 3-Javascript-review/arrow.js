// Common function
// function add(a, b){
//     return a + b;
// }

// Arrow function
// let add = (a, b) => {
//     return a + b;
// }

// if return has a single line, the syntax can be resumed on this way:
let add = (a, b) => a + b;

//console.log(add(20, 20));

// Another Example

// function greeting(){
//     return 'Hello world';
// }

// const greeting = () => 'Hello world';

// Example with function with one single parameter
// function greeting(name){
//     return `Hello ${name}`
// }

const greeting = name => `Hello ${name}`;

//console.log(greeting('Juan'));

// the 'this' object scope inside arrow functions are global
let deadpool = {
    name: 'Wade',
    lastname: 'Wilson',
    ability: 'Regeneration',
    getName () { //   getName: () => {  this is wrong because 'this' are referenced to global object
        return `Name: ${this.name} ${this.lastname} - Ability: ${this.ability}`
    }
}

console.log(deadpool.getName());