//variables, objects, arrays

var questions = [
  [
    "Who is the GOAT?",
    "Michael Jordan",
    "Lebron",
    "Bird",
    "Magic",
    "https://media.giphy.com/media/DYSfS7SJvJaF2/giphy.gif",
    1
  ],
  [
    "Who was the best UNC player ever?",
    "Bird",
    "Michael Jordan",
    "Kareem Abdul Jabbar",
    "Curry",
    "https://media.giphy.com/media/XK4SLmvDdNYEU/giphy.gif",
    2
  ],
  [
    "How does one properly address Micheal Jordan?",
    "Mr. Jordan",
    "Mike",
    "His Airness",
    "Jeff",
    "https://media.giphy.com/media/tarn31SCK2v1S/giphy.gif",
    3
  ],
  [
    "Select the best basetball player of all time",
    "Michael Jordan",
    "Sally Dobbs",
    "Pablo Sanchez",
    "Amir Khan",
    "https://media.giphy.com/media/W3elPX6v2bqMg/giphy.gif",
    1
  ],
  [
    "Who makes the coolest basketball shoes?",
    "Curry",
    "Kyrie",
    "Kobe",
    "Michael Jordan",
    "https://media.giphy.com/media/kMivT1IwY3T8c/giphy.gif",
    4
  ],
  [
    "Who won 6 NBA championships?",
    "Tim Tebow",
    "Michael Jordan",
    "Dale",
    "Lebron",
    "https://media.giphy.com/media/A4lWCSfHToEdG/giphy.gif",
    2
  ],
  [
    "Who is better than LeBron James?",
    "Michael Jordan",
    "Curry",
    "Brady",
    "You",
    "https://media.giphy.com/media/lrf5jEbnpVUek/giphy.gif",
    1
  ],
  [
    "Who is kinda a terrible owner",
    "Cuban",
    "Michael Jordan",
    "Paul Allen",
    "Peter Holt",
    "https://media.giphy.com/media/d3MLV9CB1iYb0IBG/giphy.gif",
    2
  ],
  [
    "Who probably had a tutor do all of his school work?",
    "Michael Jordan",
    "Science Majors",
    "Lebron",
    "Not this answer",
    "https://media.giphy.com/media/Rnc6rVjrGc9bi/giphy.gif",
    1
  ],
  [
    "What was this quiz about?",
    "You",
    "Michael Jordan",
    "JavaScript",
    "French Fries",
    "https://media.giphy.com/media/DYSfS7SJvJaF2/giphy.gif",
    2
  ],

  
];

var time = 30;
var questionNumber = 0;
var numberCorrect = 0; 

//functions

function setHtml() {
  console.log("button clicked!");

  $(".container").empty();

  var container = $(".container");
  var row;
  var col;
  var h1;
  var h2;

  // row 1

  row = $("<div>", { class: "row row-1" });
  col = $("<div>", { class: "col" });
  h1 = $("<h1>");
  h1.text("Trivia Game");
  col.append(h1);
  row.append(col);
  container.append(row);

  //row 2

  row = $("<div>", { class: "row row-2" });
  col = $("<div>", { class: "col" });
  h2 = $("<h2>");
  h2.addClass('time');
  h2.text("Time Remaining " + time);
  col.append(h2);
  row.append(col);
  container.append(row);

  //row 3

  row = $("<div>", { class: "row row-3" });
  col = $("<div>", { class: "col" });
  col.append("<h2>", { class: "title" });
  row.append(col);
  container.append(row);

  //row 4

  var row = $("<div>", { class: "row row-4" });
  var col = $("<div>", { class: "col" });


  col.append($("<button>", { class: "question-title" }));
  col.append($("<button>", { class: "btn choice choice-1" }));
  col.append($("<button>", { class: "btn choice choice-2" }));
  col.append($("<button>", { class: "btn choice choice-3" }));
  col.append($("<button>", { class: "btn choice choice-4" }));
  row.append(col);
  container.append(row);

}

function setQuestion(questionNumber) {
  

  var currentQuestion = questions[questionNumber];

  //places the true for the right answer in the 'answer' attr

  var answer = currentQuestion[currentQuestion[6]];
  $('.'+ answer).attr("answer", true);
  


  $(".question-title").text(currentQuestion[0]);
  $(".choice-1").text(currentQuestion[1]);
  $(".choice-2").text(currentQuestion[2]);
  $(".choice-3").text(currentQuestion[3]);
  $(".choice-4").text(currentQuestion[4]);

  
}

function setTimer(){
  time--;

  if(time < 1){
    recordAnswer();
    time = 30;
  }

  $('.time').text("Time Remaining: " + time);

  
}

function recordAnswer(){

  

  if($(this).attr('answer')){
    numberCorrect++;
  }
  
  reset();

}

function reset(){

  setAnswer(questionNumber);
  questionNumber++;
  setQuestion(questionNumber);
  setTimeout(function(){
    time = 30;
    setHtml();
    setQuestion(questionNumber);
    answers = $(".btn.show-answer");
    console.log("last answer", answers);
  }
    , 5000);

}
function setAnswer(questionNumber) {
  var currentQuestion = questions[questionNumber];

  console.log(questionNumber);
  console.log("show answer button clicked");
  console.log("question Array", questions);
  console.log("question Number", questionNumber);
  console.log("question array", currentQuestion);
  console.log("quesiton gif", currentQuestion[5]);

  $(".container").empty();

  var container = $(".container");
  var row;
  var col;
  var h1;
  var h2;
  var h5;

  // row 1

  row = $("<div>", { class: "row row-1" });
  col = $("<div>", { class: "col" });
  h1 = $("<h1>");
  h1.text("Trivia Game");
  col.append(h1);
  row.append(col);
  container.append(row);

  //row 2

  row = $("<div>", { class: "row row-2" });
  col = $("<div>", { class: "col" });
  h2 = $("<h2>");
  h2.text("Time remaining " + time);
  col.append(h2);
  row.append(col);
  container.append(row);

  //row 3

  row = $("<div>", { class: "row row-3" });
  col = $("<div>", { class: "col" });
  h5 = $("<h5>");

  // the correct answer is referenced from the 6th element of the currentQuestion array to itself
  
  
  h5.text("The correct answer is " + currentQuestion[currentQuestion[6]]);
  col.append(h5);
  col.append(
    $("<img>", {
      src: currentQuestion[5]
    })
  );
  row.append(col);
  container.append(row);
}

$(document).ready(function() {

  $('body').on('click','.start',function(){
    setHtml();
    setQuestion(questionNumber);
    setInterval(setTimer, 1000);
  }).on('click', '.choice', recordAnswer);










  /* $(".start").click(function() {
    setHtml();
    setQuestion(questionNumber);

    //cycles to next question

    $(".btn.next-question").click(function() {
      console.log("next button clicked");
      questionNumber++;
      setQuestion(questionNumber);
    });

    //event listeners can only be applied to 'original html'

    $("body").on("click", ".btn.show-answer", function() {
      setAnswer(questionNumber);
      questionNumber++;
      console.log(questionNumber);
      setTimeout(function(){
          setHtml();
          setQuestion(questionNumber);
          answers = $(".btn.show-answer");
          console.log("last answer", answers);
        }
          , 3000);
        
    });
  }); */



});
