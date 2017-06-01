$(document).ready(function() {
    //toggle game instruction animation
    $('#flip').click(function() {
        $('#panel').slideToggle("slow");
    });
    //zooming crystal on mouse enter
    $('.zoomimg').mouseenter(function() {
        $(this).css("cursor", "pointer");
        $(this).animate({ width: "50%", height: "50%" }, 'fast');
    });

    $('.zoomimg').mouseleave(function() {
        $(this).animate({ width: "28%" }, 'fast');
    });

    //Generate random number generator to be used for both the computer and crystals (code from: http://bit.ly/2q4KR6x)
    function randomMinMaxNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // initial values on game load setup
    var computer = 0;
    var wins = 0;
    var losses = 0;
    var crystal01 = 0;
    var crystal02 = 0;
    var crystal03 = 0;
    var crystal04 = 0;
    var totalScore = 0;

    // assign random value to computer score between 19 - 120.
    function beginGame() {
        //computer choose random number
        var randomCompNumberSet = randomMinMaxNumber(19, 120);
        computer = randomCompNumberSet;
        //jquery text function to write html http://bit.ly/2q9xRMZ
        $('#js-computer').text(computer);

        // assign random values to each crystals between  1 - 12.
        var crystal01Random = randomMinMaxNumber(1, 12);
        crystal01Set = crystal01Random;
        //crystal01Random = crystal01Set
        var crystal02Random = randomMinMaxNumber(1, 12);
        crystal02Set = crystal02Random;

        var crystal03Random = randomMinMaxNumber(1, 12);
        crystal03Set = crystal03Random;

        var crystal04Random = randomMinMaxNumber(1, 12);
        crystal04Set = crystal04Random;

    }

    // assign random values to each crystals between  1 - 12.
    // add clicked crystal's value into totalScore
    $('#crystal01').click(function() {
        totalScore += crystal01Set;
        $("#js-userScore").text(totalScore);
        console.log(totalScore);
        scoreChk();
    });

    //click crystal02
    $("#crystal02").click(function() {
        totalScore += crystal02Set;
        $('#js-userScore').text(totalScore);
        scoreChk();
    });

    //click crystal03
    $("#crystal03").click(function() {
        totalScore += crystal03Set;
        $('#js-userScore').text(totalScore);
        scoreChk();
    });

    //click crystal04
    $("#crystal04").click(function() {
        totalScore += crystal04Set;
        $('#js-userScore').text(totalScore);
        scoreChk();
    });


    // compare clicked totalScrore and see if its <= computers score

    // if score matches to computer score increment players score

    // if user score goes over computer score, i++ losses, reset and continue

    //function/logic to figure score function
    function scoreChk() {
        if (totalScore == computer) {
            wins++;
            $('#wins').text(wins);
            reset();
        };
        if (totalScore > computer) {
            losses++;
            $('#losses').text(losses);
            reset();
        };
    };

    beginGame()

    //reseting game function
    function reset() {
        crystal01 = 0;
        crystal02 = 0;
        crystal03 = 0;
        crystal04 = 0;
        totalScore = 0;
        computer = 0;
        $('#js-userScore').text(0);
        beginGame()
    };

});
