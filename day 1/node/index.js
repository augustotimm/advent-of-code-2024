import * as fs from 'fs'

import { Input } from './input.js'

function createInputFromFile(filePath) {
    const inputLists = {
        0: [],
        1: []
    }
    const fileData = fs.readFileSync(filePath, 'utf8')

    const lines = fileData.split('\n')
    lines.map(line => {
        const inputs = line.split('   ')
        inputs.forEach((input, index) => {
            inputLists[index].push(parseInt(input))
        })
    })
    return new Input(inputLists['0'], inputLists['1']);

}


const path = "/Users/i752054/Documents/Repos/advent-of-code-2024/day 1/input"
const input = createInputFromFile(path)
input.sort()
console.log(input)
let index = 0
let distanceSum = 0
while (index < input.listOne.length && index < input.listTwo.length) {
    const distance = Math.abs(input.listTwo[index] - input.listOne[index]);
    distanceSum += distance
    index++
}
console.log(distanceSum)