// business logic

// var array = [];

// user interface logic
$(document).ready(function() {
  $("form#word").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();


// correct this!!!
    // var answer = leapYear(year);
// RIGHT HERE!!!!

    // alert()word.slice(0);

    // array.push(word);
    var words = word.split(" ");


    words.forEach(function(word) {
      // var eachWord = word.slice();
      // console.log(eachWord);
      var letterOfEachWord = word.split("")
      console.log(letterOfEachWord);

      letterOfEachWord.forEach(function(letter) {
        
      });

      // var allLetters = letters.toString();
      // var firstLetter = allLetters.split("")

    });


// =====
// INPUT "PIG LATIN"
  // var words = word.split(" ");
// OUTPUT = ["PIG", "LATIN"]
    // var letters = words.slice(0, 1);
// OUTPUT = ["PIG"]
    // var allLetters = letters.toString();
// OUTPUT = "PIG"
    // var firstLetter = allLetters.split("")
// OUTPUT = "P"
// =====





    // var firstLetter = letters.indexOf("a, e, i...");



    // console.log(array);
    // console.log(words);
    // console.log(letters);
    // console.log(allLetters);
    // console.log(firstLetter[0]);




    // $(".answer").text(answer);
    $(".word").text(word);




    // if (!result) {                 // same as writing if (result === false)
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }



    $("#result").show();
  });
});
