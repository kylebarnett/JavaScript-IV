// CODE here for your Lambda Classes
class Person {
  constructor(props){
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak(){
    console.log(`Hello my name is ${this.name}, and I am from ${this.location}`)
  }
}
const myself = new Person ({
  name: 'Kyle',
  age: 23,
  location: 'Salt Lake City',
  gender: 'Male'
})
const girlfriend = new Person ({
  name: 'Priscilla',
  age: 24,
  location: 'Salt Lake City',
  gender: 'Female'
})
myself.speak()
girlfriend.speak()


class Instructor extends Person {
  constructor(props){
    super(props)
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject){
    console.log(`Today we are learning about ${subject}`)
  }
  grade(student, subject){
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }
}

const teacher1 = new Instructor({
  name: 'Hsu',
  age: 45,
  location: 'Salt Lake City',
  gender: 'Male',
  specialty: 'Mathamatics',
  favLanguage: 'Javascript',
  catchPhrase: `Don't forget the homies`
})
teacher1.demo('Python')
teacher1.grade({name: 'Kyle'}, 'Javascript')
