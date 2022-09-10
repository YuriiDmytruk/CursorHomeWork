class Student {
  constructor(university, course, fullName, marks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
    this.excluded = false;
  }

  getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }

  get marks() {
    if (!this.excluded) {
      return this._marks;
    }
    return null;
  }

  set marks(value) {
    if (!this.excluded) {
      this._marks = Array.isArray(this.marks) ? this.marks : [];
      this._marks.push(value);
      this._marks = this._marks.flat(Infinity);
      return this._marks;
    }
    return null;
  }

  getAverageMark() {
    return (
      this.marks.reduce((partialSum, a) => partialSum + a, 0) /
      this.marks.length
    );
  }

  dismiss() {
    this.excluded = true;
  }

  recover() {
    this.excluded = false;
  }
}

class BudgetStudent extends Student {
  constructor(university, course, fullName, marks, scholarShip) {
    super(university, course, fullName, marks);
    this.scholarShip = scholarShip;
  }

  getScholarship(){
    return `Студент ${this.fullName} отримав ${this.scholarShip} грн. стипендії`;
  }
}

const student = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  1,
  "Остап Родоманський Бендер",
  [5, 4, 4, 5, 5]
);