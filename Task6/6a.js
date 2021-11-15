function ConvertToCelsius(form){

  var fValue = form.input.value;
    var fToCel = (fValue - 32) * 5 / 9;
    var message = fValue+'\xB0F is ' + fToCel + '\xB0C.';
      console.log(message);
      document.write (message);
    document.body.style.backgroundColor = "white";
  
  }
  
  function ConvertToFahrenheit(form){
  var cValue = form.input.value;
    var cToFahr = cValue * 9 / 5 + 32;
    var message = cValue+'\xB0C is ' + cToFahr + ' \xB0F.';
      console.log(message);
       document.write (message);
         document.body.style.backgroundColor = "white";
  }