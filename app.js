





$(document).ready(function () {
    $("#keyboard-upper-container").hide();
    $('#sentence').text(currentSentence);
    

    const sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'];

    var sentencesIndex = 0;
    var lettersIndex = 0;
    var currentSentence = sentences[sentencesIndex]
    var letters = currentSentence.split('', currentSentence.length)
    var currentLetter = letters[lettersIndex];
    var blockPosition = 0; // number of pixels from the left for yellow block
    $('#target-letter').text(currentLetter);

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
                sentencesIndex ++; 
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