export const getValuesFromURL = () => {
    let values = []

    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => values[key] = value)

    return values
}

export const changeFill = (element, color) => element.style.fill = color

export const addClass = (element, className) => element.classList.add(className)

export const removeClass = (element, className) => element.classList.remove(className)

export const $ = query => document.querySelectorAll(query).length > 1 ? document.querySelectorAll(query) : document.querySelector(query)

export const generateRandomNumbers = ([min, max]) => Math.floor(Math.random() * (max - min) + min)
