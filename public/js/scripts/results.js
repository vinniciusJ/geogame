import showResultContainer from '../modules/Result/showResultContainer.js'
import populateHistory from '../modules/Result/populateHistory.js'

import { getValuesFromURL, $ } from '../utils/utils.js'

const { name, correct_answers, time, grade, evaluate } = getValuesFromURL()

const currentPlayerContainer = $('.current-player')
const bestPlayerContainer = $('.best-player')
const historyContainer = $('.table-data')

let currentPlayer = { name, correct_answers, time, grade, evaluate: evaluate.split('%20').join(' ') }
let bestPlayer = JSON.parse(localStorage.getItem('best-player'))

const historyAttempts = [...JSON.parse(localStorage.getItem('history'))] || []

currentPlayerContainer.innerHTML = showResultContainer('Resultado', currentPlayer)

if(bestPlayer){
    if(bestPlayer.grade < currentPlayer.grade){
        bestPlayer = currentPlayer
    }
    else if(bestPlayer.grade == currentPlayer.grade){
        const [ bestPlayerMin, bestPlayerSeg ] = bestPlayer.time.split('-').map(value => +value)
        const [ currentPlayerMin, currentPlayerSeg ] = currentPlayer.time.split('-').map(value => +value)

        if(bestPlayerMin > currentPlayerMin){
            bestPlayer = currentPlayer
        }
        else if(bestPlayerMin == currentPlayerMin){
            if(bestPlayerSeg > currentPlayerSeg){
                bestPlayer = currentPlayer
            }
        }
    }
}
else {
    bestPlayer = currentPlayer  
}

localStorage.setItem('best-player', JSON.stringify(bestPlayer))

bestPlayerContainer.innerHTML = showResultContainer('Melhor Jogador', bestPlayer)

if(historyAttempts.length == 0){
    populateHistory().forEach(rowAttempt => historyContainer.innerHTML += rowAttempt)
}
else {
    populateHistory(historyAttempts).forEach(rowAttempt => historyContainer.innerHTML += rowAttempt)
}

if(historyAttempts.length > 2){
    historyAttempts.shift()
    historyAttempts.push(currentPlayer)
}
else {
    historyAttempts.push(currentPlayer) 
}


localStorage.setItem('history', JSON.stringify(historyAttempts.reverse()))