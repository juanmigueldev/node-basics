
// using destructuring to get locally function directly
const { createFile, listTable } = require('./multiply/multiply')
const { argv } = require('./config/yargs')
const colors = require('colors/safe');

let command = argv._[0]

switch (command) {
    case 'list':
        listTable(argv.base, argv.limit)
            .then(data => {
                console.log(colors.green(data))
            })
            .catch(err =>{
                console.log(err)
            })
        
        break;

    case 'create':
        createFile(argv.base, argv.limit)
            .then(file => {
                console.log(`File ${file} has been created`)
            })
            .catch(err => {
                console.log(err)
            })

        break;

    default:
        console.log('Unrecognized command')
}

// reads app parameter introduced at console. Example: node app -base=5
//let argv2 = process.argv
// let param = argv[2]
// let base = param.split('=')[1]

//console.log(argv);

