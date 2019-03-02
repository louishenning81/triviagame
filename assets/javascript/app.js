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
            A1: "Baquiat",
            A2: "Warhol",
            A3: "Magritte",
            A4: "Hockney"
        },
        {
            painterQ: "This photographer was known for her intricate photographs of flowers?",
            A1: "Wright",
            A2: "O'Keefe",
            A3: "Leibovitz",
            A4: "Arbus"
        },
        {
            painterQ: "It is hypothesized that this Dutch painter used complicated optics to create his paintings.",
            A1: "Vermeer",
            A2: "van Eyck",
            A3: "Rembrandt",
            A4: "Gauguin"
        },
        {
            painterQ: "This 15th century Dutch painter often painted macabre and gruesome depictions of hell.",
            A1: "Vermeer",
            A2: "Cesanne",
            A3: "Bosch",
            A4: "van Eyck"
        }
        ]
}

var userAnswer;
var number;
var correct = 0;
var wrong = 0;
// Variable showTimer will hold the setInterval
var showTimer;
// Count will keep track of the index of the currently displaying picture.
var count = 0;

function displayQuestion() {
    $(".card-header").html(slides.Questions[count].painterQ);
    $("#A1").html(slides.Questions[count].A1);
    $("#A2").html(slides.Questions[count].A2);
    $("#A3").html(slides.Questions[count].A3);
    $("#A4").html(slides.Questions[count].A4);

}

$("button").on("click", function () {
    userAnswer = $(this).val();
    console.log($(this).val());
});


displayQuestion();

$(".start").click(run);

function run() {
    number = 10;
    showTimer = setInterval(decrement, 1000);
    $(".empty").empty();
    nextQuestion();
}

function nextQuestion() {

    // Increment the count by 1.
    number = 10;
    count++;
    displayQuestion();
}

function decrement() {
    //  Shows the countdown in the #time-remaining tag.
    number--;
    $(".time-remaining").html("<h2>" + number + "</h2>");
    if (count === 1 && number === 0 || userAnswer === "1" || userAnswer === "3" || userAnswer === "4") {
        timesUp();
        setTimeout(displayAnswer, 3000);
        wrong++;
    }
    else if (count === 1 && userAnswer === "2") {
        timesUp();
        setTimeout(displayAnswer, 3000);
        correct++;
    }
    else if (count === 2 && number === 0 || userAnswer === "1" || userAnswer === "3" || userAnswer === "4") {
        timesUp();
        setTimeout(displayAnswer, 3000);
        wrong++;
    }
    else if (count === 2 && userAnswer === "2") {
        timesUp();
        setTimeout(displayAnswer, 3000);
        correct++;
    }
    else if (count === 3 && number === 0 || userAnswer === "1" || userAnswer === "3" || userAnswer === "4") {
        timesUp();
        setTimeout(displayAnswer, 3000);
        wrong++;
    }
    else if (count === 3 && userAnswer === "2") {
        timesUp();
        setTimeout(displayAnswer, 3000);
        correct++;
    }
    else if (count === 4 && number === 0 || userAnswer === "1" || userAnswer === "3" || userAnswer === "4") {
        timesUp();
        setTimeout(displayAnswer, 3000);
        wrong++;
    }
    else if (count === 4 && userAnswer === "2") {
        timesUp();
        setTimeout(displayAnswer, 3000);
        correct++; 
}
}

// $("#A2").on("click", function () {
//     userAnswer1 = $(this).val();
//     console.log($(this).val());
// });
// $("#A2").on("click", function () {
//     userAnswer2 = $(this).val();
// });
// $("#A3").on("click", function () {
//     userAnswer3 = $(this).val();
// });
// $("#A4").on("click", function () {
//     userAnswer4 = $(this).val();
// });

function timesUp() {
    clearInterval(showTimer);
}

function displayAnswer() {
    if (count = 1) {
        $(".card-header").text("The correct answer is.");
        $("#A1").empty();
        $("#A3").empty();
        $("#A4").empty();
        run();
    }
    else if (count = 2) {
        $(".card-header").text("The correct answer is.");
        $("#A1").empty();
        $("#A3").empty();
        $("#A4").empty();
        run();
    }
    else if (count = 3) {
        $(".card-header").text("The correct answer is.");
        $("#A1").empty();
        $("#A3").empty();
        $("#A4").empty();
        run();
    }
    else if (count = 3) {
        $(".card-header").text("The correct answer is.");
        $("#A1").empty();
        $("#A3").empty();
        $("#A4").empty();
        run();
    }
}
// variable to define correct answers to run inside setTimeout

// var answers = [slides.Questions[1].A3,
// slides.Questions[2].A1,
// slides.Questions[3].A4,
// slides.Questions[4].A3
// ]


// This will run the display image function as soon as the page loads.


   //     //  ...run the stop function.


    //     //  Alert the user that time is up.

    // }

    // $(".btn-choice").on("click", function () {
    // if ()


    // TODO: Use a setTimeout to run correct/incorrect screen 
    // var timeout1 = setTimeout(displayAnswer, 1000);


    // TODO: If the count is the same as the length of the image array, reset the count to 0.
    // if (count === slides.Questions.length) {
    //     count = 0;
    // }

