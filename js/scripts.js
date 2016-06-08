
var checkIfLeap = function(yearInput) {
  var isLeapYear = false;
   if (typeof yearInput != Number) {

   } else if () {

   } else if (yearInput % 4 === 0) {
    isLeapYear = true;
  } else if (yearInput % 100 === 0 ){
    isLeapYear = false;
    return isLeapYear
  } else if (yearInput % 400 === 0 ) {
    isLeapYear = true;
  }
  return true;
}





$(document).ready(function(){

  $("#leapYear").submit(function(event){
    event.preventDefault();
    var year = parseInt($("#userYear").val());
    console.log(checkIfLeap(year));
  });

});
