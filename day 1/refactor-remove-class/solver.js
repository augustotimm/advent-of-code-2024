import * as fs from 'fs'

export function parseInputFile(filePath) {
    const inputResult = {
        '0': [],
        '1': []
    }
    const fileData = fs.readFileSync(filePath, 'utf8')

    const lines = fileData.split('\n')
    lines.map(line => {
        const inputs = line.split('   ')
        inputs.forEach((element, index) => {
            inputResult[index].push(parseInt(element))
        })
    })
    return inputResult
}

export function calculateDistanceSum(listOne, listTwo) {
    const distances = calculateDistanceArray(listOne, listTwo)
    return distances.reduce((accumulator, element) => element + accumulator, 0)
}

function calculateDistanceArray(listOne, listTwo) {
    const distances = []
    listOne.forEach((element, index) => {
        distances.push(calculateDistance(element, listTwo[index]))
    })
    return distances
}

export function calculateSimilarityScore(listOne, listTwo) {
    return listOne.reduce((accumulator, element) => {
        const currentSimilarityScore = calculateScoreForElement(element, listTwo)
        accumulator += currentSimilarityScore
        return accumulator
    }, 0)
}

function calculateScoreForElement(element, list) {
    const elementsInListTwo = findElementInList(list, element)
    return elementsInListTwo.length * element
}

function findElementInList(list, element) {
    return list.filter(e => e === element)
}

function calculateDistance(elementOne, elementTwo) {
    return Math.abs(elementOne - elementTwo);
}