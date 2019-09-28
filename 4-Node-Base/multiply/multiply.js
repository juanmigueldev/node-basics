// requireds
const fs = require('fs')

let listTable = (base, limit = 10) => {

  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`The base '${base}' is not a number`)
      return;
    }

    if (!Number(limit)) {
      reject(`The limit '${limit}' is not a number`)
      return;
    }

    let data = ''

    for (let i = 1; i <= limit; i++) {
      data += `${base} * ${i} = ${base * i}\n`
    }

    resolve(data)
  })

}


let createFile = (base, limit = 10) => {

  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`The base '${base}' is not a number`)
      return;
    }

    if (!Number(limit)) {
      reject(`The limit '${limit}' is not a number`)
      return;
    }

    let fileName = `tables/table-${base}-limit-${limit}.txt`
    let data = ''

    for (let i = 1; i <= limit; i++) {
      data += `${base} * ${i} = ${base * i}\n`
    }

    fs.writeFile(fileName, data, err => {
      if (err) 
        reject(err);
      else 
        resolve(fileName);
    })
  })

}


// Add function to exports
module.exports = {
  createFile,
  listTable
};



