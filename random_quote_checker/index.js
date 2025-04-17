const quotes =[ "Nobody is ever met at the airport when beginning a new adventure. It's just not done.",
"The only time to buy these is on a day with no 'y' in it.",
"Events in the past may be roughly divided into those which probably never happened and those which do not matter.",
"If you want to make an apple pie from scratch, you must first create the universe.",   
"It's a sign of mediocrity when you demonstrate gratitude with moderation.",
"God doesn't require us to succeed; he only requires that you try.",
"Events in the past may be roughly divided into those which probably never happened and those which do not matter.",
"If you want to make an apple pie from scratch, you must first create the universe.",
"Be rich to yourself and poor to your friends.",
"It's a sign of mediocrity when you demonstrate gratitude with moderation.",
"God doesn't require us to succeed; he only requires that you try.",
"Success is following the pattern of life one enjoys most.",
"Even the fear of death is nothing compared to the fear of not having lived authentically and fully.",
"Living in the moment brings you a sense of reverence for all of life's blessings.",
"You can approach the act of writing with nervousness, excitement, hopefulness, or even despair “the sense that you can never completely put on the page what is in your mind and heart. You can come to the act with your fists clenched and your eyes narrowed, ready to kick ass and take down names. You can come to it because you want a girl to marry you or because you want to change the world. Come to it any way but lightly. Let me say it again: you must not come lightly to the blank page.",
"Be rich to yourself and poor to your friends.",
"The best thing to give to your enemy is forgiveness; to an opponent, tolerance; to a friend, your heart; to your child, a good example; to a father, deference; to your mother, conduct that will make her proud of you; to yourself, respect; to all men, charity."
]

const usedIndex = new Set()
const quoteElement= document.getElementById("quote")

function generateQuote() {
    if (usedIndex.size >= quotes.length){
        usedIndex.clear()
    }
    while (true){
        const randomIndex= Math.floor(Math.random() * quotes.length); //math floor round down
        if (usedIndex.has(randomIndex)) continue;

        const quote = quotes[randomIndex];
        quoteElement.innerHTML = quote;
        usedIndex.add(randomIndex);
         break;
}   }