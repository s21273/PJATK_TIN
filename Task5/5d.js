function Student(id, firstName, lastName, grades){

    this.getGrades = function(){
        return  grades.reduce((a, b) => a + b) / grades.length;
    }
    this.getFullName = function(){
        return firstName + " " + lastName;
    }
    this.getId = function(){
        return id;
    }

    this.setFullName = function(fullName){
        let fullNameArr = fullName.split(/(\s+)/);
        firstName = fullNameArr[0];
        lastName  =  fullNameArr[fullNameArr.length -1];
    }
}

const student = new Student(1,"Seyma Ruveyda","Calis",[90,95,100]);
student.setFullName("Hilal Calis");
console.log(student.getId(),student.getFullName(),student.getGrades());