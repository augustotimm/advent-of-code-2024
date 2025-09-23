import * as fs from 'fs'

import { parseInputFile, calculateDistanceSum, calculateSimilarityScore } from './solver.js'




const path = "/Users/i752054/Documents/Repos/advent-of-code-2024/day 1/input"



function solve() {
    const input = parseInputFile(path)
    for (const key in input) {
        input[key].sort((a, b) => a - b)
    }
    const distanceSum = calculateDistanceSum(input['0'], input['1'])
    console.log(`distanceSum: ${distanceSum}`)
    const similarityScore = calculateSimilarityScore(input['0'], input['1'])
    console.log(`similarityScore: ${similarityScore}`)

    return {distanceSum, similarityScore}
}

solve()
