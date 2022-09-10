class Student {
  constructor(university, course, fullName){
    this.university = university;
    this.course = course;
    this.fullName = fullName;
  }

  getInfo(){
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }
}

const student = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер")

console.log(student.getInfo());