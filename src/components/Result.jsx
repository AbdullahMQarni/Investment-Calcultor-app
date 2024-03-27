import React from 'react'
import { calculateInvestmentResults } from '../util/investment'
import { formatter } from '../util/investment'

function Result({userInputs, initialInvestment }) {
    const resultData = calculateInvestmentResults(userInputs)

    console.log(resultData)
    return (
        <table id='result'>
            <thead>
                <th>Year</th>
                <th>Amount Invested</th>
                <th>Interest (year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </thead>
            <tbody>
                {resultData.map((yearData) => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest

                    return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}

export default Result