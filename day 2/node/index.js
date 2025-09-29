import * as fs from 'fs'

import { Report } from './report.js'

function createReportsFromFile(filePath) {
    const reports  = []
    const fileData = fs.readFileSync(filePath, 'utf8')

    const lines = fileData.split('\n')
    lines.map(line => {
        const parsedReport = line.split(' ').map(level => parseInt(level))
        reports.push(new Report(parsedReport))

    })

    return reports
}

function solve(path) {
    const reports = createReportsFromFile(path)
    const safeReports = reports.filter(report => report.isSafe())
    console.log(`There are ${safeReports.length} safe reports out of ${reports.length}`)
}
const path = "/Users/i752054/Documents/Repos/advent-of-code-2024/day 2/input"
solve(path)




