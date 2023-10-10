//What to wear
function Påklædning(inputScale) {
    if (inputScale > 30) {
        console.log("Jeg vil anbefale helt at droppe jakken!");
    } else if (inputScale > 15) {
        console.log("Jeg vil anbefale en sommerjakke!");
    } else if (inputScale >= 0) {
        console.log("Jeg vil anbefale en vinterjakke!");
    } else {
        console.log("Bliv hjemme");
    }
}

Påklædning(18);

//Dice game
function Diceroll(times) {
    let jackpot = true;
    let sixCount = 0;

    for (let i = 0; i < times; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        if (roll === 6) {
            sixCount++;
        } else {
            jackpot = false;
        }
    }

    if (jackpot) {
        console.log("Jackpot!");
    } else {
        console.log("You rolled 6 a total of " + sixCount + " times.");
    }
}

Diceroll(2);

//Sentiment analyzer
const positiveWords = ["awesome", "cool", "nice"]
const negativeWords = ["lazy", "stupid", "arrogant"]
function getSentimentScore(sentence) {
    const words = sentence.split(" ");
    let foundPositiveWords = [];
    let foundNegativeWords = [];
    let score = 0;
    for (let word of words) {
        if (positiveWords.includes(word)) {
            score += 1;
            foundPositiveWords.push(word);
        } else if (negativeWords.includes(word)) {
            score -=1;
            foundNegativeWords.push(word);
        }
    }
    return {
        score: score,
        positiveWords: foundPositiveWords,
        negativeWords: foundNegativeWords
    };
}

const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');
console.log(sentimentScoreObject);



