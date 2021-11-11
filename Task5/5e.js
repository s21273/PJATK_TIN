class Student{

    constructor(id, firstName, lastName, grades){
        Object.defineProperty(this, 'id', {
            get: function(){
                return id;
            }
        })
        Object.defineProperty(this, 'averageGrades', {
            get: function(){
                return grades.reduce((a, b) => a + b) / grades.length;
            }
        })
        Object.defineProperty(this, 'fullName', {
            get: function(){
            return firstName + " " + lastName;
            },
            set: function(fullName){
                let fullNameArr = fullName.split(/(\s+)/);
                firstName = fullNameArr[0];
                lastName  =  fullNameArr[fullNameArr.length -1];
            }
        })
    }
}

const s = new Student(2,"Hilal","Calis",[87,100,85]);
s.fullName = "Seyma Calis";
console.log(s.id,s.fullName,s.averageGrades);