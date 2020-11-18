import verifyPoint from './verify.js'
import { generateRandomNumbers, $ } from '../../utils/utils.js'

const generatePoint = () => {
    const points = $('.points')
    const sortedPoints = []

    const interval = [0, (points.length - 1)]

    for(let i = 0; i < 10; i++){
        let sortedPoint = points[generateRandomNumbers(interval)]

        while(verifyPoint(sortedPoints, sortedPoint)){
            sortedPoint = points[generateRandomNumbers(interval)]
        }

        sortedPoints.push(sortedPoint)
    }

    return { points, sortedPoints }
}

export default generatePoint