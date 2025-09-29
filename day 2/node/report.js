function getVariationType(variation) {
    if (variation > 0) {
        return 1
    }
    if (variation < 0) {
        return -1
    }
    return 0
}

export class Report {
    levelsArray = []
    variationType = null

    constructor(levelsArray) {
        this.levelsArray = levelsArray
    }

    isSafe() {
        for (let i = 0; i < this.levelsArray.length - 1; i++) {
            const currentLevel = this.levelsArray[i]
            const nextLevel = this.levelsArray[i + 1]
            const variation = this.getVariation(currentLevel, nextLevel)
            const variationType = getVariationType(variation)
            if(this.variationType === null) {
                this.variationType = variationType
                if(!this.isSafeVariationType()) {
                    return false
                }
            }
            if (!this.isSafeVariation(variation)) {
                return false
            }
        }
        return true

    }

    getVariation(currentLevel, nextLevel) {
        return nextLevel - currentLevel
    }

    isSafeVariation(variation) {
        const absoluteVariation = Math.abs(variation)
        const isSafeValue = absoluteVariation  >= 1 && absoluteVariation <= 3

        const variationType = getVariationType(variation)
        const isSameType = this.variationType === variationType

        return isSafeValue && isSameType
    }

    isSafeVariationType() {
        return this.variationType !==  0
    }

}