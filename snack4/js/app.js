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
2- We have to create a new array with all the students that have a total of grades more than 70.
3- We have to create a new array with all the students that have a total of grades more than 70 and id more than 120.
*/

let students = [
    {
        name: 'Marco',
        id: 213,
        grades: 78
    },
    {
        name: 'Paola',
        id: 110,
        grades: 96
    },
    {
        name: 'Andrea',
        id: 250,
        grades: 48
    },
    {
        name: 'Gaia',
        id: 145,
        grades: 74
    },
    {
        name: 'Luigi',
        id: 196,
        grades: 68
    },
    {
        name: 'Piero',
        id: 102,
        grades: 50
    },
    {
        name: 'Francesca',
        id: 120,
        grades: 84
    },

];

//capitalized names
const  capitalizedNames = students.map((student) => {
    return student.name.toUpperCase();
});

console.log(capitalizedNames);


//grades more than 70

const gradesMoreThan70 =  students.filter((element) => 
{
    // if we don't have grades return false
    
    if(!element.grades){
        return false;
    }
    const { grades } = element;
    return grades > 70;
});
    

console.log(gradesMoreThan70);

//grades more than 70 and id more than 120

const gradesMoreThan70AndId120 =  students.map((student) => {
    if(student.grades > 70 && student.id > 120) {
        return student;
    } else {
        return '';
    }
});

console.log(gradesMoreThan70AndId120);