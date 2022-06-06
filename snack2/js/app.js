/* 
Create a array of objects of footbal team. Every team will have different proprieties: name, goal, fouls drawn.
Name will be the only propriety to compile, the others are settled to 0.
Generate random num to replace the 0 of the proprieties: 
goal and fouls drawn.
At the end, using the deconstruction create a new array the elements of which contain only name and fouls drawn and print all in console.
*/

const team = [
    {
        name: 'Barcellona',
        goal: 0,
        foulsDrawn: 0,
    },
    {
        name: 'Genova',
        goal: 0,
        foulsDrawn: 0,
    },
    {
        name: 'Milano',
        goal: 0,
        foulsDrawn: 0,
    },
    {
        name: 'NewYork',
        goal: 0,
        foulsDrawn: 0,
    },
    {
        name: 'Cagliari',
        goal: 0,
        foulsDrawn: 0,
    },
    {
        name: 'Roma',
        goal: 0,
        foulsDrawn: 0,
    },
];


for (let i = 0; i < team.length; i++) {
    const randomNum = Math.floor(Math.random() * 100) + 1;

    team[i].goal  = randomNum;
};
for (let i = 0; i < team.length; i++) {
    const randomNum = Math.floor(Math.random() * 100) + 1;

    team[i].foulsDrawn  = randomNum;
};

const newArrayTeam = [];

for (let i = 0; i < team.length; i++) {
    const {name, goal} = team[i];
    newArrayTeam.push ({
        name,
        goal,
    });
};

console.table(team);
console.log(newArrayTeam);