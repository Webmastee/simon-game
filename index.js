

var buttonColours = ["red", "blue", "green", "yellow"];



var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    
    checkAnswer(userClickedPattern.length-1);
});

var started = false;
var level = 0;


$(this).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level)
        nextSequence()
        started = true;
    }
   
});



function playSound (name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    

}


function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    var delayInMilli = 100;
    setTimeout( function() {
        $("#" + currentColour).removeClass("pressed")
    }, delayInMilli);
}


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
    }

    if (userClickedPattern.length === gamePattern.length) {
        setTimeout (function () {
            nextSequence()
        }, 1000)
    }

    else {

       
        console.log("wrong");

        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(function () {
            $("body").removeClass("game-over"), 200
        })

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }

}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}




// function makesound (key) {
//     switch (key) {
//         case "blue":

//             var blue = new Audio("./sounds/blue.mp3");
//             blue.play();
 
//             break;

//             case "green":
//                 var green = new Audio("./sounds/green.mp3");
//                 green.play();

//                 case "red":
//                     var red = new Audio("./sounds/red.mp3");
//                     red.play();

//                 case "wrong":
//                     var wrong = new Audio("./sounds/wrong.mp3");
//                     wrong.play();

//                     case "yellow":
//                         var yellow = new Audio("./sounds/yellow.mp3");
//                         yellow.play();
    
//         default: console.log(buttonInnerHtml)
            
//     }
// }



function nextSequence () {

    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4)

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    const select = $("#"+randomChosenColour)
    select.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

   playSound(randomChosenColour);
  

}



