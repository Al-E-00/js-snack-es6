/* 
With the following array of names (const = myArray), and two numbers :
min and max we have to create a new array that contain values with the position
between the numbers.
Execute this exercise fisrt with forEach and then with filter.
*/


const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const minNum = 2;
const maxNum = 4;

let newArray = [];

array.forEach((element, i) => {
    element = myArray;
    if (i >= minNum && i <= maxNum) {
        newArray.push(element[i]);
    }
});

console.log(newArray);