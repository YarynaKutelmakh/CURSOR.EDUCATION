class Student {
    fullname = null;
    university = null;
    course = null;
    _marks = [5, 4, 4, 5];
    _dismiss = false;

    set marks(mark) {
        if (!this._dismiss) {
            this._marks.push(mark);
            console.log(this.marks);
        } else {
            console.log(null);
        }
    }

    get marks() {
        return !this._dismiss ? this._marks : null;
    }

    constructor(fullname, university, course) {
        this.fullname = fullname;
        this.university = university;
        this.course = course;
    }

    getInfo() {
        return `Cтудент ${this.course}го курсу ${this.university}, ${this.fullname}`;
    }

    getAverageMark() {
        return this._marks.reduce((prevM, mark) => prevM + mark) / this._marks.length;
    }

    dismiss() {
        !this._dismiss ? this._dismiss = true : this._dismiss = false;
    }

    recover() {
        this.fullname = null;
        this.university = null;
        this.course = null;
        this._marks = [5, 4, 4, 5];
        this._dismiss = false;
    }

}

class BudgetStudent extends Student {

    constructor(fullname, university, course) {
        super(fullname, university, course);
        setInterval(() => {
            if (!this._dismiss && this.getAverageMark() >= 4) {
                this.getScholarship();
            }
        }, 30000);
    }

    getScholarship() {
        return console.log('Ви отримали 1400 грн. стипендії');
    }
}

let student = new BudgetStudent('Богдан Ковалишин', 'Національного університету м. Львова', 1);

console.log(student.getInfo());
console.log(student.marks);
student.marks = 5;
console.log(student.getAverageMark());
// student.dismiss();
student.marks = 6;
student.recover();
student.getScholarship();