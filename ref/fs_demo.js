const fs = require('fs');
const path = require('path');

//Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
    if (err) throw err;
    console.log('folder created');
});

//Create and Write to file

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world!', {}, err =>{
//     if (err) throw err;
//     console.log('FILE WRITTEN TO');

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.JS!', {}, err =>{
//         if (err) throw err;
//         console.log('FILE WRITTEN TO');
//     });
// });

//READ FILE

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8',  (err, data) =>{
//     if (err) throw err;
//     console.log(data);
// });

// Rename FILE

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'),  err =>{
    if (err) throw err;
    console.log('File Renamed');
});
