const countWordOccurrences = (sentence: string, word: string) => {
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();
    return lowerSentence.split(lowerWord).length - 1;
}

console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));