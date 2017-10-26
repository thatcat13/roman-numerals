
//bit'ness logic:
var toRomanNumerals = function(inputNum) {
  var inputArray = inputNum.split("");
  var reverseArray = inputArray.reverse();

  var ones = reverseArray.charAt(0);
  var tens = reverseArray.charAt(1);
  var hundo = reverseArray.charAt(2);
  var thou = reverseArray.charAt(3);

var onesArray = ["I", "V", "X"];
var tensArray = ["X", "L", "C"];
var hundoArray = ["C", "D", "M"];
var thouArray = ["M"];
//
var calculatron = function(ones, onesArray) {
  var result = [];
  for (var i = 0; i <= ones; i ++) {
    if (i < 3) {
    result += onesArray(0);
    console.log(result);
  }
}
};
};
  // for (var iThou = 0; iThou <= thou.length; iThou ++) {
  //   for(var iArray = 0; iArray <= inputArray.length; iArray ++) {
  //     if (inputArray[iArray] === thou[iThou]) {
  //       inputArray[]
  //     }
  //   }

//U to the I-lergic
$(document).ready(function() {
  $("form#roman").submit(function(event) {
    event.preventDefault();
    var inputNum = $("#submitted").val();
      console.log(inputNum);
  });
});
