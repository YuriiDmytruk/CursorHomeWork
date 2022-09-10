class Student {
  constructor(university, course, fullName, marks){
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
  }

  getInfo(){
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }

  get getMarks(){
    return this.marks;
  }

  set setMarks(value){
    this.marks = value;
  }
}

const student = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер", [1,2,3,4,5]);
console.log(student.marks);