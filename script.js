var textarea = document.getElementById("text");
var totalCounter = document.getElementById("total-counter");
var remainingCounter = document.getElementById("remaining-counter");

textarea.addEventListener("input", function() {
    var currentLength = textarea.value.length;
    
    totalCounter.textContent = currentLength;
    remainingCounter.textContent = 50 - currentLength;
});