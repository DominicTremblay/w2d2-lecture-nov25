const fs = require('fs');

const readFile = (filename, cb) => {
  
  console.log(('-'.repeat(20)));
  console.log(`Reading File ${filename}`);
  fs.readFile(filename, (err, data) => {
    if (err) throw err;
    cb(`Finish Loading ${filename}`);
  });
  
  console.log('Finish Loading Cat1');
}

readFile('./pictures/cat1.jpg', function(msg){console.log(msg)});
readFile('./pictures/cat2.jpg', function(msg){console.log(msg)});
readFile('./pictures/cat3.jpg', function(msg){console.log(msg)});
