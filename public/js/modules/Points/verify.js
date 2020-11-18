import getCoords from './getCoords.js'

const calculateDistancy = (previousLat, previousLng, currentLat, currentLng) => 
    Math.sqrt(((previousLat - currentLat) ** 2) + ((previousLng - currentLng) ** 2))

const verifyPoint = (points, point) => {
    const [ currentLat, currentLng ] = getCoords(point, true)

    for(let previousPoint of points){
        let [ previousLat, previousLng ] = getCoords(previousPoint, true) 

        let distancy = calculateDistancy(previousLat, previousLng, currentLat, currentLng)
        
        if(distancy < 40)
            return true
    }

    return false
}

export default verifyPoint