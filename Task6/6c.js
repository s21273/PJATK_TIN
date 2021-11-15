function validateData(form){
    var fname = form.fname.value;
    var lname = form.lname.value;
    var tnumber = form.tnumber.value;
    
    
     
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
      if(tnumber===""){
        console.log("All fields must be filled ");
        document.getElementById('tnumber').focus();
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
    if(allNumeric(tnumber)===false){
     console.log("Not valid telephone number");
     document.getElementById('tnumber').focus();
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