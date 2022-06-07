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

//exercise executed with forEach

myArray.forEach(function(names, i){
    if ( i >= minNum && i <= maxNum) {
        newArray.push(names);
    }
});

console.log(newArray);


//exercise executed with filter

const newArrayTwo = myArray.filter(i => {
    return (i <= minNum && i >= maxNum);
}
)

console.log(newArrayTwo);