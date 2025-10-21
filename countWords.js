const sentence = "This is a test and This is the only test";
const words = sentence.split("");
const wordCount = new Map();
for (const word of words) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
}
console.log(wordCount);