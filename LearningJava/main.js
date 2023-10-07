// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

Person.prototype.getBirthYear = function() { 
    return this.dob.getFullYear();
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1985');

console.log(person1);
console.log(person2.firstName);
console.log(person1.getFullName());
