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

  get marks(){
    return this._marks;
  }

  set marks(value){
    this._marks = Array.isArray(this.marks) ? this.marks : [];
    this._marks.push(value);
    this._marks = this._marks.flat(Infinity);
    return this._marks;
  }
}

const student = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер", [1,2,3,4,5]);

student.marks = 5;