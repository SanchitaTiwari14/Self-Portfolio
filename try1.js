document.addEventListener('DOMContentLoaded', function() {
    var additionalText = document.querySelector('.additional-text');
    var sentences = ["I am a programmer", "and a web developer"];
    var currentSentence = 0;

    function typeSentence(sentence, targetElement, delay) {
        for (var i = 0; i < sentence.length; i++) {
            setTimeout(function(char) {
                return function() {
                    targetElement.textContent += char;
                };
            }(sentence[i]), i * delay);
        }
    }

    function displayNextSentence() {
        if (currentSentence < sentences.length) {
            additionalText.textContent = '';
            typeSentence(sentences[currentSentence], additionalText, 100);
            currentSentence++;
        } else {
            currentSentence = 0; // Reset counter to loop
        }
    }

    displayNextSentence(); // Start typing the first sentence

    // Display next sentence on click
    // additionalText.addEventListener('click', displayNextSentence); // Remove this line to disable click-to-continue
    setInterval(displayNextSentence, 2000); // Change 2000 to the delay you want between sentences (in milliseconds) for automatic looping
});




// Show footer when scrolling to the end of the page
window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var distanceToBottom = document.body.getBoundingClientRect().bottom;
    if (distanceToBottom <= window.innerHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});

