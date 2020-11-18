const setZone = value => {
    let zone = value[value.length - 1]
    
    if(zone == 'N' || zone == 'E'){
        return value.length > 2 ? +value.substr(0, 2) : +value.substr(0, 1)
    }
    else if(zone == 'S' || zone == 'W') {
        return value.length > 2 ? -value.substr(0, 2) : -value.substr(0, 1)
    }

    return +value.substr(0, 1)
}

const getCoords = (point, isNumber) => isNumber ? point.id.split('-').map(value => setZone(value)) : point.id.split('-')

export default getCoords