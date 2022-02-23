





$(document).ready(function () {
    $("#keyboard-upper-container").hide();
    $('#sentence').text(currentSentence);


    const sentences = ["McCoy is in trouble down at the saloon again.",
        "That McCoy just won't settle up his card debts!",
        "Now one of those lowdown outlaws put a snake in his boots.",
        "McCoy's angrier than a temperance nag in a whisky barrel.",
        "He's calling for a showdown at high noon!"];

    var sentencesIndex = 0;
    var lettersIndex = 0;
    var currentSentence = sentences[sentencesIndex]
    var letters = currentSentence.split('', currentSentence.length)
    var currentLetter = letters[lettersIndex];
    var blockPosition = 0; // number of pixels from the left for yellow block  
    var correct = 0;
    var mistake = 0;
    

    $('#target-letter').text(currentLetter);
    $(document).keyup(function (e) {
        if (sentencesIndex == 5) {
          if  (confirm("Mighty fine keyslinging there, Partner. The number of misfires you made was only" + " " + mistake + "! Reckon you did it in no time flat too, but us cowpokes don't go in for fancy computer time-keeping. Press OK (Corral) to try again.") == true) {
                window.location.reload(); 
          } else {

          }

        }
    })
    $(document).keyup(function (e) {
        if (blockPosition == 0) {
            $('#feedback').empty();
        }
    });
    $(document).keydown(function (e) {
        if (currentLetter == e.key) {
            $('#feedback').append('<span class="glyphicon glyphicon-certificate"></span>');
            correct = correct += 1;

        } else if (e.which == 16) {

        } else {
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
            mistake = mistake += 1;
        }


    });
    $(document).keydown(function (e) {

        if (e.which == 16) {
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();

        } else {
            if (lettersIndex < currentSentence.length) {
                lettersIndex++;
                currentLetter = letters[lettersIndex];
                $('#target-letter').text(currentLetter);
                blockPosition += 17.5
                $('#yellow-block').css("left", blockPosition);

            }
            if (lettersIndex == currentSentence.length) {
                $('#sentence').text(" ");
                sentencesIndex++;
                currentSentence = sentences[sentencesIndex];
                $('#sentence').text(currentSentence);
                lettersIndex = 0;
                letters = currentSentence.split('', currentSentence.length)
                currentLetter = letters[lettersIndex];
                $('#target-letter').text(currentLetter);
                blockPosition = 0;
                $('#yellow-block').css("left", blockPosition)

            }


        };
    });

    $(document).keyup(function (e) {
        if (e.which == 16) {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();

        };
    });

    $(document).keypress(function (e) {
        let targetNum = e.key.charCodeAt();
        $('#' + targetNum).css('background-color', 'yellow');
        $(document).keyup(function (e) {
            let targetNum = e.key.charCodeAt();
            $('#' + targetNum).css('background-color', '');
        });

    });




    screenSentence();

    function screenSentence() {
        $('#sentence').text(currentSentence);
    }






}); 