let employees = [{
    id: 1,
    name: 'Juan'
},{
    id: 2,
    name: 'Stephanie'
}, {
    id: 3,
    name: 'John'
}]

let salaries = [{
    id: 1,
    amount: 1000
},{
    id: 2,
    amount: 2000
}]

let getEmployee = (id, callback) => {
    
    let employee = employees.find(emp => emp.id === id)

    if(!employee)
        callback(`Employee with id ${id} not found`)
    else
        callback(null, employee)
}

let getSalary = (employee, callback) => {

    let salary = salaries.find(sal => sal.id === employee.id)

    if(!salary){
        callback(`Not salary found for employee ${employee.name}`)
    }
    else{
     
        let data = {
            id: employee.id,
            name: employee.name,
            salary: salary.amount
        }

        callback(null, data)
    }
}


// nested callbacks
getEmployee(2, (err, employee) => {
    
    if(err)
        return console.log(err)

    getSalary(employee, (err, data) =>{

        if(err)
            return console.log(err);

        console.log(`The salary of ${data.name} is USD ${data.salary}`)
    })
})