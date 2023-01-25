// Task 1:

// const sur = {};
// function addKeyValueToObject(obj, key, value){
//     obj[key] = value;
//     return obj;
// }
// console.log(addKeyValueToObject(sur, "surname", "Baba"));
// function deleteKeyValueFromObject(obj, key){
//     delete obj[key];
//     return obj;
// }
// console.log(deleteKeyValueFromObject(sur, "surname"));


// Task 2:

// const person = {};
// function addOrDeleteKeyValueFromObj(obj){
//     if(confirm("Add key value to the object")){ 
//         const key = prompt("Please enter key name in the object");
//         const value = prompt("Please enter key value");
//         isNaN(value) ? obj[key] = value : obj[key] = +value;
//         return obj;
//     }else if(confirm("Delete key value from the object")){
//         const key = prompt("Please enter key name in the object");
//         delete obj[key];
//         return obj;
//     }else{
//         return obj;
//     }
// }
// addOrDeleteKeyValueFromObj(person);


// Task 3: sort object in ascending order by 'count' value

// const arr = [{count:5}, {name: "Ali", count: 1}, {surname: "Mammadov", count: 4}];
// arr.sort((a, b) => a.count - b.count);
// console.log(arr);


// Task 4 & 5:

// const person = {
//     name: "Person",
//     describe: function(){
//         console.log(`My name is ${this.name}.  I'm ${this.age} years old.`);
//     }
// };
// // case 1 shallow copy
// const me = Object.create(person); 
// me.name = "Zarangul";
// me.age = 25;
// me.describe();
// // case 2
// const person2 = {...person};
// person2.name = "John";
// person2.age = 40;
// person2.describe();
// // case 3
// const person3 = person;
// person3.name = "Person3";
// person3.age = 19;
// person3.describe();
// // case 4 shallow copy
// const person4 = {};
// Object.assign(person4, person); 
// person4.name = "Person4";
// person4.age = 41;
// person4.describe();
// // case 5 deep copy
// const person5 = JSON.parse(JSON.stringify(person)); 
// person5.name = "Person5";
// person5.age = 20;
// person5.describe = function(){
//     console.log(`My name is ${this.name}.  I'm ${this.age} years old.`);
// };
// person5.describe();


// Task 6: create new object using Functional constructor

// function Bird(){
//     this.name = "bird";
//     this.numLegs = 2;
// }
// const duck = new Bird();
// duck.name = "duck";
// const owl = new Bird();
// owl.name = "owl";

// Task 7 create object with Builder Pattern

function Employee(name, gender, age, position, experience){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.position = position;
    this.experience = experience;
}
function EmployeeBuilder(name, position){
    this.name = name;
    this.position = position;
    this.setGender = function(gender){
        this.gender = gender;
        return this;
    }
    this.setAge = function(age){
        this.age = age;
        return this;
    }
    this.setExperience = function(experience){
        this.experience = experience;
        return this;
    }
    this.built = function(){
        return new Employee(this.name, this.gender, this.age, this.position, this.experience);
    }
}
const employee = new EmployeeBuilder("John", "Web Development")
.setGender("male")
.setAge(23)
.setExperience(2)
.built();
