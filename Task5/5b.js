function Student(id, firstName, lastName, grades){
    this.id = id,
    this.firstName = firstName,
    this.lastName = lastName,
    this.grades = grades,
    this.printGrades = function(){
        let gradeAvg = (grades) => grades.reduce((a, b) => a + b) / grades.length;
        console.log(firstName,lastName,gradeAvg(grades))
    }
}
const student1 = new Student(1,"Seyma Ruveyda","Calis",[90,95,100]);
const student2 = new Student(2,"Hilal","Calis",[87,100,85]);

student1.printGrades();
student2.printGrades();