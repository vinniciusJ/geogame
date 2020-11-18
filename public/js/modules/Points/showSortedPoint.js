import getCoords from "./getCoords.js"

import { $ } from '../../utils/utils.js'

const showSortedPoint = point => {
    const container = $('.coord')

    const [ lat, lng ] = getCoords(point, false)

    container.textContent = `${lat} ${lng}`

    return { point, lat, lng }
}

export default showSortedPoint