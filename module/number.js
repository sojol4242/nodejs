let number = [];
// number=number.map(e=>e*2);

function double(number) {
  for (let i = 0; i < number.length; i++) {
    const element = number[i] * 2;
    console.log(element);
  }
 number.map(e=>console.log(e*2)) 
}

module.exports = {
  number,
  double,
};
// console.log(module);
