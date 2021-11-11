class Person{
    constructor(firstName, lastName){
       this.firstName = firstName;
       this.lastName = lastName;

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

class Student extends Person{

   constructor(id, firstName, lastName, grades){
       super(firstName,lastName);
       
       Object.defineProperty(this, 'id', {
           get: function(){
               return id;
           }
       })
       Object.defineProperty(this, 'avgGrades', {
           get: function(){
               return grades.reduce((a, b) => a + b) / grades.length;
           }
       })
   }
}

const s = new Student(2,"Hilal","Calis",[87,100,85]);
s.fullName = "Seyma Calis";
console.log(s.id,s.fullName,s.avgGrades);