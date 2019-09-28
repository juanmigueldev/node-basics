
// setTimeout(() => {
//     console.log('Hola mundo')
// }, 3000)

let getUserById = (id, callback) => {
    
    let user = {
        id,
        name : 'Juan'
    }

    if(id === 20)
        callback(`User with id ${id} not exists`)
    else
        callback(null, user)
}

getUserById(20, (err, user) => {

    if(err)
        return console.log(err)

    console.log(`User`, user)
})