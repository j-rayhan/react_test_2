class Person {
  constructor(name = "Rayhan", age = 0) {
    this.name = name;
    this.age = age;
  }
  getName() {
    // return this.name;
    // return 'Hi I am ' +this.name + ' !';
    return `Hi I am  ${this.name} !`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old!`;
  }
}

class Student extends Person {
  constructor(name, age, group) {
    super(name, age);
    this.group = group;
  }

  hasGroup() {
    return !!this.group;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasGroup()) {
      description += `Their Major subject is ${this.group}.`;
    }
    return description;
  }
}

// const me = new Person('Johir', 22);
// console.log('get name : ',me.getDescription());

// const other = new Person();
// console.log('get other name : ',other.getDescription());

const me = new Student("Johir", 22, "CSC");
console.log("get student : ", me);
console.log("get student : ", me.getDescription());

const other = new Person();
// console.log('get other student : ',other);
// console.log("get other student : ", other.hasGroup());

// !'' = true
// !!'' = false
// !!'ray' = true
// !!undefined = false
