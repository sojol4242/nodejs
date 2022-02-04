// number=number.map(e=>e*2);
const number = [];

function double(number) {
  const doubleArray = [];

  for (let i = 0; i < number.length; i++) {
    let element = number[i] * 2;
    doubleArray.push(element);
  }
  return doubleArray;
  //  number.map(e=>console.log(e*2))
}


// module.exports = {
//   number,
//   double,
// };
// console.log(module);
