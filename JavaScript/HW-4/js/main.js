const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairsOfStudents() {
    const girls = [];
    const boys = [];
    const pairs = [];
    for(let i = 0; i < students.length; i++) { 
        if(students[i][students[i].length-1] === "а" || students[i][students[i].length-1] === "я") {
            girls.push(students[i])
         } else {
             boys.push(students[i])
         }
    }
    for(let i = 0; i < students.length / 2; i++) {
        pairs.push([boys[i], girls[i]])
    }
    return pairs
}
const pairs = getPairsOfStudents();
console.log(pairs);

function getTopic() {
    const copyPairsForTopic = getPairsOfStudents();
    for(let i = 0; i < themes.length; i++) {
        copyPairsForTopic[i].push(themes[i]);
    }
    return copyPairsForTopic
}
const topic = getTopic();
console.log(topic);

function getMarkForStudent() {
    const mark = [];
    for(let i = 0; i < marks.length; i++) {
        mark.push([students[i], marks[i]]);
    }
    return mark
}
const markForStudent = getMarkForStudent();
console.log(markForStudent);

function getMarksForPairs() {
    const copyPairsForMark = getTopic();
    for(let i = 0; i < copyPairsForMark.length; i++){
        copyPairsForMark[i].push(Math.floor(Math.random() * 5) + 1);
    }
    return copyPairsForMark
}

const marksForPairs = getMarksForPairs();
console.log(marksForPairs);
