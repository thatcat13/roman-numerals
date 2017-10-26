var numbers = [1, 4, 5, 9, 10, 14, 19, 40, 50, 90, 100, 400, 500, 900, 1000];

var roman = ["I", "IV", "V", "IX", "X", "XIV", "XIX" "XL", "L", "XC", "X", "CD", "D", "CM", "M"];

var converter = function(input) {
  var inputArray = input.split("");
    for (var i = 0; i < input.length; i++) {
      if (input.length === 4) {
        //run the thousands thing
      } else if (input.length === 3) {
        //run the hundreds thing
      } else if (input.length === 2) {
        //run the tens thing
      } else {
        //run the ones thing
      }
    }

var thousands = function(thousands) {
  var thou = ["1", "2", "3"];
  var letters = ["M", "MM", "MMM"];
  for (var iThou = 0; iThou <= thou.length; iThou ++) {
    for(var iArray = 0; iArray <= inputArray.length; iArray ++) {
      if (inputArray[iArray] === thou[iThou]) {
        inputArray[]
      }
    }
  }
}

var hundreds = function(hundreds) {
  //do stuff
}

var tens = function(tens) {
  //do stuff
}

var ones = function(ones) {
  //do stuff
}

}); //converter
//
//
// var converter = function(parameter) {
//   for () {
//     for () {
//       if () {
//
//       } else {
//
//       }
//     }
//   }
// }


$(document).ready(function() {
  $("form#roman").submit(function(event) {
    event.preventDefault();
    var inputNum = ($("input#submitted").val());
      console.log(inputNum);
    // var check = function(value) {
    //   return Number.isNaN(Number(inputNum));
    //
    // }
  });

});







//   for (var iInput = 0; iInput <= input.charAt(0); iInput ++) {
//     for(var iRoman = 0; iRoman <= roman.length; iRoman ++)
//       if (input[iInput] === roman[iRoman]) {
//       return(I);
//     }  else {
//       return(V);
//     }
//
//   }
// };
