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

let getEmployee = async (id) => {

    let employee = employees.find(emp => emp.id === id)

    if (!employee)
        throw new Error(`Employee with id ${id} not found`)
    else
        return employee

}

let getSalary = async (employee) => {

    let salary = salaries.find(sal => sal.id === employee.id)

    if (!salary) {
        throw new Error(`Not salary found for employee ${employee.name}`)
    }
    else {

        return  {
            id: employee.id,
            name: employee.name,
            salary: salary.amount
        }
    }
}

let getEmployeeData = async id => {
  let employee = await getEmployee(id)
  let employeeSalary = await getSalary(employee)

  return `The salary of ${employeeSalary.name} is USD ${employeeSalary.salary}`
}

getEmployeeData(3)
    .then(message => {
        console.log(message)
    })
    .catch(err => {
        console.log(err);
    })

