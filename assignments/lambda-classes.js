//#### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
};

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(instrAttrs) {
        super(instrAttrs);
        this.specialty = instrAttrs.specialty;
        this.favLanguage = instrAttrs.favLanguage;
        this.catchPhrase = instrAttrs.catchPhrase;
    }
    demo() {
        console.log(`Today we are learning about ${this.specialty}.`);
    }
    grade() {
        console.log(`${studentAttrs.name} receives a perfect score on ${this.specialty}!`);
    }     
};

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects() {
        console.log(this.favSubjects); // double check that this does an array. I think this is wrong
    }
    PRAssignment() {
        console.log(`${this.name} has submitted a PR for ${instrAttrs.specialty}.`);
    }
    sprintChallenge() {
        console.log(`${this.name} has begun sprint challenge on ${instrAttrs.specialty}.`);
    }
};

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
//   * 

class Project Manager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp() {
        console.log(`{this.name} announces to {this.gradClassName}, @channel standy times!​​​​​`);
    }
    debugsCode() {
        console.log(`{this.name} debugs {studentAttrs.name}'s code on {studentAttrs.favSubjects}`)
    }
};



const bruce = new Instructor({
  name: 'Bruce Banner',
  location: 'NYC',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't make me angry. You wouldn't like me when I'm angry.`
});

const amber = new Student({
    name: 'Amber Pittman',
    location: 'Atlanta',
    age: 35,
    gender: 'female',
    previousBackground: 'Office Administrator and Sales',
    className: 'WEBPT6',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
})