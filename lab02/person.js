//Person

function Person(name, birthdate, friends, greeting) {
    this.name = name;
    this.birthdate = birthdate;
    this.friends = friends;
    this.greeting = greeting;
}

Person.prototype.printGreeting = function () {
    console.log(this.greeting);
}

Person.prototype.addFriend = function (person) {
    this.friends.push(person);
}

Person.prototype.getAge = function () {
    dateString = this.birthdate;
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthData.getDate())) {
        age--;
    }
    return age;
}

Person.prototype.isFriends = function (person) {
    return this.friends.indexOf(person) > -1;
}

//Student

function Student(name, birthdate, friends, greeting, major){
    Person.call(this, name, birthdate, friends, greeting);
    this.major = major;
}
Student.prototype = Object.create(Person.prototype)

// testing
console.log("testing:")
var person1 = new Person("Person1", "1970/01/01", [person2, person3], "I'm person1")
console.log(person1)
var person2 = new Person("Person2", "1970/02/02", [person1], "I'm person2")
console.log(person2)
var person3 = new Person("Person3", "1970/03/03", [person1], "I'm person3")
console.log(person3)

person1.printGreeting()

console.log("person3 friends with person1 (true)?:", person3.isFriends(person1))
console.log("person3 friends with person2 (false)?:", person3.isFriends(person2))
person3.addFriend(person2)
console.log("person3 should now be friends with person2:", person3.isFriends(person2))

var student1 = new Student("Student1", "1970/01/01", [person1], "I'm student1", "Computer Science")
console.log(student1)
console.log("Is student1 an instanceof Person?:", student1 instanceof Person)