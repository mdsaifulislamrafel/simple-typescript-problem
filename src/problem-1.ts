const sumArray = (numbers: number[]): number => {
    return numbers.reduce((p, c) => p + c, 0);
}

console.log(sumArray([2, 5, 4, 5, 5]));

