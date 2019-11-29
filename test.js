const symbol = '+';

/* takes in a variable
on the console will generate a pyramid which as a base with length as passed into the function
if you pass 5 it will draw a pyramid of length 5 as the base
*/
const pyramidCreator = (length) => {
    var output = ''
    let spaces = 0
    const start = (length % 2) ? 1 : 2
    for (let i = start; i < length+1; i += 2) {
        spaces = (length - i) / 2
        output += `${' '.repeat(spaces)}${symbol.repeat(i)}${' '.repeat(spaces)}\n`
    }
    return output
}

console.log(pyramidCreator(4))
console.log(pyramidCreator(5))
console.log(pyramidCreator(8))
console.log(pyramidCreator(9))