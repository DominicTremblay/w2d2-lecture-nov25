const map = (list, cb) => {

  const outputArr = [];

  for (let element of list) {
    outputArr.push(cb(element));
  }

  return outputArr;

};

const numbers = [1,2,3,4,5];

console.log(map(numbers, function(nb) {
  return nb * nb;
}));

console.log(map(numbers, function(nb) {
  return nb * 3;
}));
