let deadpool = {
    name: 'Wade',
    lastname: 'Wilson',
    ability: 'Regeneration',
    getName: function(){
        return `Name: ${this.name} ${this.lastname} - Ability: ${this.ability}`
    }
}

// normal case
// let name = deadpool.name;
// let lastname = deadpool.lastname;
// let ability = deadpool.ability;

// using destructuring
//let { name, lastname, ability } = deadpool;
//console.log(name, lastname, ability);

// destructuring with renaming
let { name: firstname, lastname, ability } = deadpool;
console.log(firstname, lastname, ability);
