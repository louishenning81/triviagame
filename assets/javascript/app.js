var slides = {
    Questions:
        [{
            painterQ: "Art History trivia!",
            A1: "Click start below to begin",
            A2: "Click start below to begin",
            A3: "Click start below to begin",
            A4: "Click start below to begin"
        },
        {
            painterQ: "What Pop artist designed the Campbell's soup can logo",
            A1: "Picasso",
            A2: "Cesanne",
            A3: "Magritte",
            A4: "Gauguin"
        },
        {
            painterQ: "This photographer was known for her intricate photographs of flowers?",
            A1: "Magritte",
            A2: "Cesanne",
            A3: "Picasso",
            A4: "Gauguin"
        },
        {
            painterQ: "It is hypothesized that this Dutch painter used complicated optics to create his paintings.",
            A1: "Magritte",
            A2: "Cesanne",
            A3: "Picasso",
            A4: "Gauguin"
        },
        {
            painterQ: "This 15th century Dutch painter often painted macabre and gruesome depictions of hell.",
            A1: "Magritte",
            A2: "Cesanne",
            A3: "Picasso",
            A4: "Gauguin"
        }
        ]
}

var Answer1;
var Answer2;
var Answer3;
var Answer4;
var number = 10;


// Variable showTimer will hold the setInterval when we start the slideshow
var showTimer;
var timer2;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startTriviaGame" when we click the "start" button.

function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(showTimer);
  }

$(".start").click(run);

$("#A1").on("click", function () {
    Answer1 = $(this).val();
});
$("#A2").on("click", function () {
    Answer2 = $(this).val();
});


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayQuestion() {
    $(".card-header").html(slides.Questions[count].painterQ);
    $("#A1").html(slides.Questions[count].A1);
    $("#A2").html(slides.Questions[count].A2);
    $("#A3").html(slides.Questions[count].A3);
    $("#A4").html(slides.Questions[count].A4);

}

// need function to define correct answers to run inside nextQuestion function

var answers = [slides.Questions[1].A3,
slides.Questions[2].A1,
slides.Questions[3].A4,
slides.Questions[4].A3
]

// function startTriviaGame() {
//     console.log("timer");
    // TODO: Use showImage to hold the setInterval to run nextImage.

// function startTrivia () {
    
// }

function run() {
    showTimer = setInterval(decrement, 1000);
    nextQuestion();
    
}

function timeout() {
    number = 5;
    timer2 = setInterval(decrement, 1000);
}

function decrement() {
    //  Show the number in the #show-number tag.
    number--;
    $(".time-remaining").html("<h2>" + number + "</h2>");



}

function nextQuestion() {

    // Increment the count by 1.

    count++;
    displayQuestion();    
    if (number === 0 || Answer1 === 2 || Answer1 === 3 || Answer1 === 4) {
        clearInterval(showTimer);
        timeout();
        $(".card-header").html("Time's up!");
        $()
    // else

    //     //  ...run the stop function.
        

    //     //  Alert the user that time is up.
        
    // }

    // $(".btn-choice").on("click", function () {
    // if ()


    // TODO: Use a setTimeout to run correct/incorrect screen 
    // var timeout1 = setTimeout(displayAnswer, 1000);


    // TODO: If the count is the same as the length of the image array, reset the count to 0.
    if (count === slides.Questions.length) {
        count = 0;
    }
}




// This will run the display image function as soon as the page loads.
displayQuestion();
