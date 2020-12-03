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

function getSubjects(student) {
  const subject = Object.keys(student.subjects);
  return subject.map(subject => subject[0].toLocaleUpperCase() + subject.slice(1).replace("_", " "));
}
const subjects = getSubjects(students[0]);
console.log(subjects);

function getAverageMark(student) {
  let allPoints = [];
  for(key in student.subjects) {
    allPoints = allPoints.concat(student.subjects[key])
  }
  return +(allPoints.reduce((sum, mark) => sum + mark) / allPoints.length).toFixed(2);
}
const averageMark = getAverageMark(students[1]);
console.log(averageMark);

function getStudentInfo(student) {
  return `Course: ${student.course}, name: ${student.name}, averageMark: ${getAverageMark(student)}`
}
const studentInfo = getStudentInfo(students[0]);
console.log(studentInfo);

function getStudentsNames(students) {
  return (students.map(name => name.name)).sort()
}
const studentsNames = getStudentsNames(students);
console.log(studentsNames);

function getBestStudent(students) {
  const points = []
  students.forEach(student => {
    points.push({
      name: student.name,
      grade: getAverageMark(student)
    });
  });
  return points.reduce((acc, curr) => acc.grade > curr.grade ? acc : curr).name
}
const bestStudent = getBestStudent(students);
console.log(bestStudent);

function calculateWordLetters(word) {
  let wordArr = [...word]
  let result = {};
  wordArr.forEach((i) => {
    result[i] = result[i] + 1 || 1;
  });
  return result;
}
const calculateLetters = calculateWordLetters('worddd');
console.log(calculateLetters);