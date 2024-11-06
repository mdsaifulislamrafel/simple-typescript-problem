# Problem 3 :

## This function works with a sentence and a word, and counts how many times the word appears in the sentence.

## How it works:
* Converting sentence and word to lowercase: First, the sentence and the word are converted to lowercase so that there is no difference between uppercase and lowercase letters.

* split(lowerWord): The sentence is then split by the target word. It divides the sentence based on the occurrences of lowerWord.

* length - 1: We subtract 1 from the length of the resulting array because the split method creates an extra part when it finds a match. So, to get the correct count, we subtract 1 from the array length.

### Example:
* In the sentence "TypeScript is great. I love TypeScript!", the word "typescript" appears 2 times, so the output will be 2.