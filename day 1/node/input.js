export class Input {
    listOne= []
    listTwo= []

    constructor(listOne, listTwo) {
        this.listOne = listOne
        this.listTwo = listTwo
    }

    sort() {
        this.listOne.sort((a, b) => a - b)
        this.listTwo.sort((a, b) => a - b)
    }

    calculateDistanceSum() {
        let index = 0
        let distanceSum = 0
        while (index < this.listOne.length && index < this.listTwo.length) {
            const distance = Math.abs(this.listTwo[index] - this.listOne[index]);
            distanceSum += distance
            index++
        }
        return distanceSum
    }

    calculateSimilarityScore() {
        let similarityScore = 0
        this.listOne.forEach((element, index) => {
            const elementsInListTwo = this.listTwo.filter(e => e === element)
            similarityScore += elementsInListTwo.length * element
        })
        return similarityScore
    }
}