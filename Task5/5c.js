function Student(id, firstName, lastName, grades){
    this.id = id,
    this.firstName = firstName,
    this.lastName = lastName,
    this.grades = grades,

    Student.prototype.printGrades = function(){
        let gradeAverage = (grades) => grades.reduce((a, b) => a + b) / grades.length;
        console.log(firstName,lastName,gradeAverage(grades))
    }

    Student.prototype.courses = ["BYT","ZPR","GRK","TIN"];
}

const s = new Student(1,"Seyma Ruveyda","Calis",[90,95,100]);
s.printGrades();
console.log(s.courses);