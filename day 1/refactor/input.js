import * as fs from 'fs'

export class Input {
    listOne= []
    listTwo= []

    constructor(filePath) {
        const fileData = fs.readFileSync(filePath, 'utf8')

        const lines = fileData.split('\n')
        lines.map(line => {
            const inputs = line.split('   ')
            this.listOne.push(parseInt(inputs[0]))
            this.listTwo.push(parseInt(inputs[1]))
        })
    }

    sort() {
        this.listOne.sort((a, b) => a - b)
        this.listTwo.sort((a, b) => a - b)
    }

    calculateDistanceSum() {
        let index = 0
        let distanceSum = 0
        while (index < this.listOne.length && index < this.listTwo.length) {
            const distance = calculateDistance(this.listOne[index], this.listTwo[index])
            distanceSum += distance
            index++
        }
        return distanceSum
    }

    calculateSimilarityScore() {
        return this.listOne.reduce((accumulator, element) => {
            const currentSimilarityScore = calculateScoreForElement(element, this.listTwo)
            accumulator += currentSimilarityScore
            return accumulator
        }, 0)
    }
}

function calculateDistance(elementOne, elementTwo) {
    return Math.abs(elementOne - elementTwo);
}

function calculateScoreForElement(element, list) {
    const elementsInListTwo = findElementInList(list, element)
    return elementsInListTwo.length * element
}

function findElementInList(list, element) {
    return list.filter(e => e === element)
}