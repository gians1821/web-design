const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

// CONVIRTIENDO A JSON

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

console.clear();

// For
for (let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// While
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

console.clear();
/*
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text)
}
*/
for (let todo of todos) {
    console.log(todo.text)    
}

