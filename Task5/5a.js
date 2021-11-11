const person = {
    firstName: "Seyma Ruveyda",
    lastName: "Calis",
    dateOfBirth: new Date('2000-11-08'),

    calculateAge: function () { 
        let today = new Date();
        let age = today.getFullYear() - this.dateOfBirth.getFullYear(); 
        let month = today.getMonth() - this.dateOfBirth.getMonth();
        let day = today.getDate() - this.dateOfBirth.getDate();
        if(month<0){
              console.log(`${this.firstName} is ${--age} years old!`);
        }else if(month === 0){
            if(day>0){
                console.log(`${this.firstName}'s ${age} birthday was ${day} days ago`);
            }else if(day < 0){
                console.log(`${this.firstName}'s ${age} birthday is in ${-day} days!`);
            }else{
                console.log(`${this.firstName}'s ${age} birthday is today!!`);
            }
        }else{
             console.log(`${this.firstName} is ${age} years old!`);
        }},

    goToSleep: function(){
        console.log("sleeping")
    },

    eat: function(){
        console.log("eating")
    }
};

person.calculateAge();

console.log("\n\n----Printing properties and methods----")
function printPersonProperties(human){
    let propValue;
    for(let propName in human){
        propValue = human[propName]
        console.log(propName,propValue,typeof(propValue));
    }
}
printPersonProperties(person)