/* 
Due a list of students of a college, with the total of their votes
    let students = [
    { name: ‘Marco’, id: 213, grades: 78 },
    { name: ‘Paola’, id: 110, grades: 96 },
    { name: ‘Andrea’, id: 250, grades: 48 },
    { name: ‘Gaia’, id: 145, grades: 74 },
    { name: ‘Luigi’, id: 196, grades: 68 },
    { name: ‘Piero’, id: 102, grades: 50 },
    { name: ‘Francesca’, id: 120, grades: 84 },
];

1- we have to create some plates with their names capitalized. We need a new string array. Every element of the new array will be the name of the student but with all the letters capitalized.
2- We have to create a new array with all the students that have a total of vows more than 70.
3- We have to create a new array with all the students that have a total of vows more than 70 and id more tha 120.
*/

let students = [
    { name: ‘Marco’, id: 213, grades: 78 },
    { name: ‘Paola’, id: 110, grades: 96 },
    { name: ‘Andrea’, id: 250, grades: 48 },
    { name: ‘Gaia’, id: 145, grades: 74 },
    { name: ‘Luigi’, id: 196, grades: 68 },
    { name: ‘Piero’, id: 102, grades: 50 },
    { name: ‘Francesca’, id: 120, grades: 84 },
];


const  capitalizedNames = students.map((student) => {
    toUpperCase(student.name);
    
});

console.log(capitalizedNames);