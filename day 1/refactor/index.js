import * as fs from 'fs'

import { Input } from './input.js'



const path = "/Users/i752054/Documents/Repos/advent-of-code-2024/day 1/input"
const input = new Input(path)
input.sort()
console.log(input)
const distanceSum = input.calculateDistanceSum()
console.log(`distanceSum: ${distanceSum}`)
const similarityScore = input.calculateSimilarityScore()
console.log(`similarityScore: ${similarityScore}`)