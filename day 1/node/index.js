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


const path = ""
const input = createInputFromFile(path)
input.sort()
console.log(input)
const distanceSum = input.calculateDistanceSum()
console.log(`distanceSum: ${distanceSum}`)
const similarityScore = input.calculateSimilarityScore()
console.log(`similarityScore: ${similarityScore}`)



