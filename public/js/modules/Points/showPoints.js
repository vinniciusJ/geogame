import generatePoints from './generate.js'

import { addClass, removeClass } from '../../utils/utils.js'

const showPoints = () => {
    const { points, sortedPoints } = generatePoints()
    const [ sortedPoint  ]= sortedPoints

    points.forEach(point => removeClass(point, 'visible'))
    sortedPoints.forEach(point => addClass(point, 'visible'))

    return { sortedPoints, sortedPoint }
}

export default showPoints