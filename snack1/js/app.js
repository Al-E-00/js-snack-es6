
/* 
Create an array of objects:

- every object will describe a racing bike with the following proprieties: name and weight.
- Print on screen the bike with the lower weight using desctructuring and template literal.
*/

const bikes = [
    {
        name: 'JFD09',
        weight: 20,
    },
    {
        name: 'DSX40',
        weight: 7,
    },
    {
        name: 'GTX67',
        weight: 3,
    },
    {
        name: 'NTX32',
        weight: 12,
    },
    {
        name: 'JKD98',
        weight: 19,
    },
    {
        name: 'HDH88',
        weight: 32,
    },
    {
        name: 'LPG76',
        weight: 2,
    },
    {
        name: 'DSX78',
        weight: 3,
    }
];

//Compare the different weights to find the smaller one.

const {name, weight} = bikes[0];

let lighterBike = { 
    name,
    weight,
};

for (let i = 1; i < bikes.length; i++) {
    const {name, weight} = bikes[i];

    if (lighterBike.weight > weight)  {
        lighterBike = {
            name, 
            weight,
        }
    }

}

console.log(lighterBike);