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
}