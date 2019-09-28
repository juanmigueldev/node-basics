
// var can be reinitialized, 

var name = 'Wolverine';

if(true){
    var name = 'Magneto';
}

console.log(name);


// let can't be reinitialized, just can in differents scopes.
let name2 = 'Wolverine';

if(true){
    let name2 = 'Magneto';
}

console.log(name2);

for (var i = 0; i <= 5; i++) {
    console.log(`i ${i}`);    
}

console.log(i);