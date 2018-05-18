//variables, objects, arrays

var questions = [
  [
    "Question-1-Title",
    "choice-1",
    "choice-2",
    "choice-3",
    "choice-4",
    "https://media.giphy.com/media/XK4SLmvDdNYEU/giphy.gif",
    1
  ],
  [
    "Question-2-Title",
    "choice-1",
    "choice-2",
    "choice-3",
    "choice-4",
    "https://media.giphy.com/media/DYSfS7SJvJaF2/giphy.gif",
    2
  ],
  ["Question-3-Title", "choice-1", "choice-2", "choice-3", "choice-4"],
  ["Question-4-Title", "choice-1", "choice-2", "choice-3", "choice-4"]
];

var time = "a time string";
var questionNumber = 0;

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
  h2.text("Time remaining " + time);
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
  col.append($("<li>", { class: "question-title" }));
  col.append($("<li>", { class: "choice-1" }));
  col.append($("<li>", { class: "choice-2" }));
  col.append($("<li>", { class: "choice-3" }));
  col.append($("<li>", { class: "choice-4" }));
  row.append(col);
  container.append(row);

  //** to be deleted! I'm making this to work through question cycling */

  var button = $("<button>", { type: "button", class: "btn next-question" });
  button.text("next question");
  $(".container").append(button);

  button = $("<button>", { type: "button", class: "btn show-answer" });
  button.text("show answer");
  $(".container").append(button);
}

function setQuestion(questionNumber) {
  console.log("you reached current questions!");

  var currentQuestion = questions[questionNumber];

  $(".question-title").text(currentQuestion[0]);
  $(".choice-1").text(currentQuestion[1]);
  $(".choice-2").text(currentQuestion[2]);
  $(".choice-3").text(currentQuestion[3]);
  $(".choice-4").text(currentQuestion[4]);
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
  $(".start").click(function() {
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
  });
});
