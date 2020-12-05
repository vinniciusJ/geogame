import showPoints from '../modules/Points/showPoints.js'
import showSortedPoint from '../modules/Points/showSortedPoint.js'
import getCoords from '../modules/Points/getCoords.js'
import Player from '../modules/Player/Player.js'
import Sound from '../modules/Sound/Sound.js'
import Chronometer from '../modules/Chronometer/Chronometer.js'
import { $, getValuesFromURL, changeFill } from '../utils/utils.js'

const currentPlayer = new Player()

const { setSound, play } = Sound()

const { sortedPoints: pointsOnScreen, sortedPoint: initiaPoint } = showPoints()
const { start: startChronometer, stop: stopChronometer } = Chronometer()

let { point: currentPoint, lat: currentLat, lng: currentLng  } = showSortedPoint(initiaPoint)

currentPlayer.name = getValuesFromURL()['name']

startChronometer()

pointsOnScreen.forEach(point => {
    point.addEventListener('click', async event => {
        const selectedPoint = event.target
        const [ selectedLat, selectedLng ] = getCoords(selectedPoint, false)

        if(selectedLat == currentLat && selectedLng == currentLng){
            currentPlayer.correctAnswers++
            currentPlayer.grade += 2

            setSound('right')
            changeFill(selectedPoint, '#4AC27D')

            setTimeout(() => changeFill(selectedPoint, '#EF3535'), 1000)
        }
        else {
            currentPlayer.grade > 0 && currentPlayer.grade-- 

            setSound('wrong')
            changeFill(selectedPoint, '#B13737')

            setTimeout(() => changeFill(selectedPoint, '#EF3535'), 2000)
        }

        await play()

        if(pointsOnScreen.indexOf(currentPoint) < 9){
            const nextPoint = pointsOnScreen[pointsOnScreen.indexOf(currentPoint) + 1]
            
            const { point: newPoint, ...coords } = showSortedPoint(nextPoint)

            currentPoint = newPoint
            currentLat = coords.lat
            currentLng = coords.lng

            $('#score').textContent = currentPlayer.correctAnswers
        }
        else {
            const { minutes, seconds } = stopChronometer()

            currentPlayer.setTimeSpent(minutes, seconds)
            currentPlayer.calculateGrade()
            currentPlayer.setEvaluate()
            
            const goingToResult = document.createElement('a')
            const attr = currentPlayer.toParam()
            
            goingToResult.href = `/result/${attr}`

            goingToResult.click()
        }
    })
})


























/*import showPoints from '../modules/showPoints.js'
import sortPoint from '../modules/sortPoints.js'
import chronometer from '../modules/chronometer.js'
import User from '../modules/user.js'

import { getValuesFromURL } from '../utils/utils.js'

let pointIndex = 0

const player = new User(getValuesFromURL()['name'])

const onClickPoint = event => {
    const selectedPoint = event.target
    const [ selectedPointLat, selectedPointLng ] = selectedPoint.id.split('-')

    const audio = new Audio()

    if(lat == selectedPointLat && lng == selectedPointLng) {
        player.correctAnswers += 2
        audio.src =   
    }
    else {
        player.wrongAnswers++
        audio.src = 
    }

    audio.play()

    pointIndex++
    
    if(pointIndex < 10){
        
        const newCoords = sortPoint(points[pointIndex])

        lat = newCoords[0]
        lng = newCoords[1]

        const score = document.querySelector('#score')

        player.result = player.correctAnswers - player.wrongAnswers < 0 ? 0 : player.correctAnswers - player.wrongAnswers


        score.textContent = `${player.result}/20`
    }
    else {
        const { minutes, seconds } = stopChronometer()

        player.correctAnswers -= minutes

        const evaluates = [
            
        ]

        for(let i = 0; i < 20; i+=4){
            if(player.correctAnswers >= i && player.correctAnswers < (i + 4)){
                player.evaluate = evaluates[(i/4)]
            }
        }

        player.time = `${minutes}-${seconds}`
        
        
        
    }
}

const sortedPoints = showPoints(onClickPoint)

const [ lat, lng ] = sortPoint(sortedPoints[pointIndex])

const chronometerContainer = document.querySelector('#timer')

const showTime = (minutes, seconds) => {
    chronometerContainer.textContent = `${minutes}min : ${seconds}s`
}

const { start: startChronometer, stop: stopChronometer } = chronometer(showTime)

startChronometer()
*/





