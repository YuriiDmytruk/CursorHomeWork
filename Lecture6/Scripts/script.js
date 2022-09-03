function getSubjects(student) {
  let result = [];
  for (subject in student.subjects) {
    result.push((subject.charAt(0).toUpperCase() + subject.slice(1)).replaceAll('_', ' '));
  }
  return result;
}

function getAverageMark(student) {
  let iter = 0, sum = 0;
  for (subject in student.subjects) {
    student.subjects[subject].forEach(e => sum += e);
    iter += student.subjects[subject].length;
  }
  return (sum / iter).toFixed(2);
}

function getStudentInfo(student) {
  let result = Object.entries(student);
  result.pop();
  result.push(["averageMark", getAverageMark(student)]);
  return result;
}

function getStudentsNames(students) {
  return students.reduce((acc, curr, index) => {
    acc[index] = curr.name;
    return acc;
  }, []).sort();
}

function getBestStudent(students) {
  return students.reduce((prev, curr) => getAverageMark(prev) > getAverageMark(curr) ? prev : curr).name;
}

function calculateWordLetters(word) {
  const result = {};
  word.split('').forEach(e => e in result ? result[e] += 1 : result[e] = 1);
  return result;
}

const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
  }];


console.log(getSubjects(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters("test"));

document.getElementById("info").innerHTML = `
<p> 1. Get subjects = ${getSubjects(students[0])}</p>
<p> 2. Get average mark= ${getAverageMark(students[0])}</p>
<p> 3. Get student info = ${getStudentInfo(students[0])}</p>
<p> 4. Get student names = ${getStudentsNames(students)}</p>
<p> 5. Get best student= ${getBestStudent(students)}</p>
<p> 6. Calculate word letters  = ${calculateWordLetters("test")}</p>
`;