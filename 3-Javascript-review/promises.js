let employees = [{
    id: 1,
    name: 'Juan'
}, {
    id: 2,
    name: 'Stephanie'
}, {
    id: 3,
    name: 'John'
}]

let salaries = [{
    id: 1,
    amount: 1000
}, {
    id: 2,
    amount: 2000
}]

let getEmployee = (id) => {

    return new Promise((resolve, reject) => {

        let employee = employees.find(emp => emp.id === id)

        if (!employee)
            reject(`Employee with id ${id} not found`)
        else
            resolve(employee)
    })
}

let getSalary = (employee) => {

    return new Promise((resolve, reject) => {
        let salary = salaries.find(sal => sal.id === employee.id)

        if (!salary) {
            reject(`Not salary found for employee ${employee.name}`)
        }
        else {
    
            let data = {
                id: employee.id,
                name: employee.name,
                salary: salary.amount
            }
    
            resolve(data)
        }
    })
}


// getEmployee(2).then(employee => {

//     getSalary(employee).then(data => {
//         console.log(`The salary of ${data.name} is USD ${data.salary}`)
//     }, (err) =>{
//         console.log(err)
//     })

// }, (err) => {
//     console.log(err)
// });


// Chaining promises
getEmployee(2)
  .then(employee => {
    return getSalary(employee);
  })
  .then(data => {
    console.log(`The salary of ${data.name} is USD ${data.salary}`);
  })
  .catch(err => console.log(err));

