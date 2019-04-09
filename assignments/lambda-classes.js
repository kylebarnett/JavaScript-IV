// CODE here for your Lambda Classes
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, and I am from ${this.location}`)
  }
}
const myself = new Person({
  name: 'Kyle',
  age: 23,
  location: 'Salt Lake City',
  gender: 'Male'
})
const girlfriend = new Person({
  name: 'Priscilla',
  age: 24,
  location: 'Salt Lake City',
  gender: 'Female'
})
myself.speak()
girlfriend.speak()


class Instructor extends Person {
  constructor(props) {
    super(props)
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }
  grade(student, subject) {
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
teacher1.grade({ name: 'Kyle' }, 'Javascript')

const teacher2 = new Instructor({
  name: 'Marry',
  age: 36,
  location: 'Salt Lake City',
  gender: 'Female',
  specialty: 'History',
  favLanguage: 'HTML',
  catchPhrase: `Don't forget the homies`
})

class Student extends Person {
  constructor(props) {
    super(props)
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
  }
  listSubjects() {
    this.favSubjects.map(favSubjects => {
      console.log(favSubjects)
    })
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`)
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }
}

const student1 = new Student({
  name: 'Jerry',
  age: 21,
  location: 'NYC',
  gender: 'Male',
  previousBackground: 'Athlete',
  className: 'WEBPT5',
  favSubjects: ['Javascript, HTML, CSS']
})

student1.listSubjects()
student1.PRAssignment('Javascript IV')
student1.sprintChallenge('Javascript IV')

class ProjectManager extends Instructor {
  constructor(props){
    super(props)
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(channel){
    console.log(`${this.name} announces to ${channel}, @channel standy times!`)
  }
  debugsCode(student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}

const pm1 = new ProjectManager({
  name: 'Kyle',
  age: 23,
  location: 'Salt Lake City',
  gender: 'Male',
  specialty: 'Mathamatics',
  favLanguage: 'Javascript',
  catchPhrase: `Don't forget the homies`,
  gradClassName: 'CS1',
  favInstructor: 'Sean'
})

pm1.standUp('WEBPT5')
pm1.debugsCode({name: 'Priscilla'}, 'React/Redux')