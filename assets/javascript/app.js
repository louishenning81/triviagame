var questions = {
    Questions: [{ Q1: "Who painted Guernica?", Answers: [{ A1: "Magritte", A2: "Cesanne", A3: "Picasso", A4: "Gauguin" }] },
    { Q2: "What Pop artist designed the Campbell's soup can logo", Answers: [{ A1: "Magritte", A2: "Cesanne", A3: "Picasso", A4: "Gauguin" }] },
    {Q3: "This photographer was known for her intricate photographs of flowers?", Answers: [{A1: "Magritte", A2: "Cesanne", A3: "Picasso", A4: "Gauguin"}]},
    {Q4: "It is hypothesized that this Dutch painter used complicated optics to create his paintings.", Answers: [{A1: "Magritte", A2: "Cesanne", A3: "Picasso", A4: "Gauguin"}]},
    {Q5: "This 15th century Dutch painter often painted macabre and gruesome depictions of hell.", Answers: [{A1: "Magritte", A2: "Cesanne", A3: "Picasso", A4: "Gauguin"}]}]
}

// Variable showTimer will hold the setInterval when we start the slideshow
var showTimer;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startTriviaGame" when we click the "start" button.
$("#start").click(startTriviaGame);


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayQuestion() {
    $(".card-header").html(questions.Questions[count]);
    $("#A1").html(questions.Questions[count].Answers.A1);
    $("#A2").html(questions.Questions[count].Answers.A2);
    $("#A3").html(questions.Questions[count].Answers.A3); 
    $("#A4").html(questions.Questions[count].Answers.A4);   

}


function nextQuestion() {

    // TODO: Increment the count by 1.
    count++;
    displayQuestion;
    $(".btn-choice").on("click", function () {
    if 

    // TODO: Use a setTimeout to run displayImage after 1 second.
    var timeout1 = setTimeout(displayAnswer, 1000)


    // TODO: If the count is the same as the length of the image array, reset the count to 0.
    if (count === images.length) {
        count = 0;
    }
}
function startSlideshow() {

    // TODO: Use showImage to hold the setInterval to run nextImage.
    showTimer = setInterval(nextImage, 10000);

}

// This will run the display image function as soon as the page loads.
displayImage();
