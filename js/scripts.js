
var checkIfLeap = function(yearInput) {
    if (isNaN(yearInput)) {
      return "Not a valid number.";
    }

   if ((yearInput % 4 === 0) && (yearInput % 100 !== 0) || (yearInput % 400 === 0)) {
     return true;
   } else {
     return false;
   }
 };
$(document).ready(function(){
  $("#leapYear").submit(function(event){
    event.preventDefault();
    var year = parseInt($("#userYear").val());
    console.log(checkIfLeap(year));
  });
});
