const Sound = () => {
    const sounds = { 
        right: '/assets/audio/right-song.mp3',
        wrong: '/assets/audio/wrong-song.mp3'  
    }

    const sound = new Audio()

    const play =  () => sound.play()

    const setSound = id => sound.src = sounds[id]

    return { setSound, play }
}

export default Sound