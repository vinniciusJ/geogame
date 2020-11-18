import { $ } from '../../utils/utils.js'

const Chronometer = () => {
    const setMinutes = 10, setSeconds = 0
    let seconds = 0, minutes = 0, status = 0, timer 
    
    const run = () => {
        if(status == 1){
            seconds += 1
    
            if(seconds > 59){
                seconds = 0
                minutes++
            }

            $('#timer').textContent = `${minutes}min : ${seconds}s`
    
            if(seconds == setSeconds && minutes == setMinutes){
                console.log('Finished')
            }
            else {
                timer = setTimeout(run, 1000)
            }
        }
    }
    const start = () => {
        status = 1
        run()
    }

    const stop = () => {
        status = 0

        clearTimeout(timer)

        return { minutes, seconds }
    }

    return { start, stop }
}

export default Chronometer