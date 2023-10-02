function play(playerChoice) {
    var resultHeading = document.getElementById("resultPlay");
    var resultText = document.getElementById("resultText");

    var choices = [
        { emoji: "👊", value: "✌️" },
        { emoji: "🖐️", value: "👊" },
        { emoji: "✌️", value: "🖐️" },
    ];

    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    resultHeading.textContent = playerChoice  + " vs " + computerChoice.emoji ;

    if (playerChoice === computerChoice.emoji) {
        resultText.textContent = "Tie";
    } else if (playerChoice === computerChoice.b) {
        resultText.textContent = "You Lost";
    } else {
        resultText.textContent = "¡You Won!";
    }
}
