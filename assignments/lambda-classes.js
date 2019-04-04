// CODE here for your Lambda Classes
class Person {
  constructor(name, age, location, gender){
    this.name = name;
    this.age = age;
    this.location = location;
    this.gender = gender;
  }
  speak(){
    console.log(`Hello my name is ${this.name}, and I am from ${this.location}`)
  }
}
const hello = new Person('Kyle', 23, 'SLC', 'Male')
// console.log(hello)
console.log(hello.speak())
