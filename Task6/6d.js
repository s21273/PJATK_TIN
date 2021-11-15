function validateData(form){
    var fname = form.fname.value;
    var lname = form.lname.value;
    var age = form.age.value;
    
    
     
     if (fname === "") {
        console.log("All fields must be filled ");
        document.getElementById('fname').focus();
        return false;
      }
      if(lname===""){
       console.log("All fields must be filled ");
        document.getElementById('lname').focus();
        return false;
      }
      if(age===""){
        console.log("All fields must be filled ");
        document.getElementById('age').focus();
        return false;
      }
     if(nameTest(fname)===false){
      console.log("Not valid first name");
      document.getElementById('fname').focus();
      return false;
      
     }
     if(nameTest(lname)===false){
     console.log("Not valid last name");
     document.getElementById('lname').focus();
     return false;
     
     }
    if(allNumeric(age)===false){
     console.log("Not valid age");
     document.getElementById('age').focus();
     return false;
    
    
    }
    console.log("Correct");
    return true;
    
    
    }
    
    
    
    function nameTest(name){
    var regName = /^[a-zA-Z]+$/;
    if(regName.test(name)){
       return true;
    }else{
       return false;
    }
    }
    
    function allNumeric(number){
    var numberReg = /^[0-9]+$/;
          if(number.match(numberReg))
          {
          return true;
    }else{
    return false;
    }
    
    }
    
    
    function addRow(value){
    var table = document.getElementById("myTable");
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Gender";
      var input = document.createElement("input");
                    input.type = "text";
                    input.id = "gender";
                    input.name = "gender";
                    input.value="";
     
     cell2.appendChild(input);
      
    }