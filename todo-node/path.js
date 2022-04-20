const mypath = require('path');

const fs = require('fs');

const notes = '/users/joe/notes.html';//Linux

const winPath = "C\User\priya_shetty\text.js"; //windows

console.log(mypath.dirname(notes))

console.log(mypath.basename(notes))
console.log(mypath.extname(notes))

//Reading file using fs module

console.warn(`I am reading file by readfile method`);
fs.readFile("./.env", 'utf8', (err, data) => {

    if (err) {

        console.error(`I am in error status ${err}`)

        return
    }
    console.warn(data);
})

//writting a file
const Content = 'added some content'



fs.writeFile(`./test.txt`, Content, { flat: 'a+' }, err => {

    if (err) {

        console.error(err)

        return
    }
    console.log(`Added content inside test.txt file successfully`);
})