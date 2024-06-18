const fs = require('fs');

// path to text
const filePath = './texto.txt';

// Function to read the file 
fs.readFile(filePath, 'utf8', (err, data) => {
    //callback function
    if (err) {
        console.error('Error reading the file:', err);
        //check if have any mistake
        return;
    }
    // show the text on terminal when there is no mistakes
    console.log('File contents:');
    console.log(data);
});
