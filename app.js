const timeContainer = document.getElementById('time')
const startBtn = document.getElementById('start')
const pauseBtn = document.getElementById('pause')
const restartBtn = document.getElementById('restart')

// Variables to store time
let miliSeconds = 0
let seconds = 0
let minutes = 0
let hours = 0

function leadZero(unit){
    if(unit.toString().length < 2){
        unit = '0'+unit
    }
    return unit
}

function setInnerHtml(id, unit){
    document.getElementById(id).innerText = leadZero(unit)
}

function myStopwatch() {
    miliSeconds++
    if(miliSeconds / 100 === 1){
        miliSeconds = 0
        seconds++
        if(seconds / 60 === 1){
            seconds = 0
            minutes++
            if(minutes / 60 === 1){
                minutes = 0
                hours++
                if(hours / 24 === 1){
                    hours = 0
                }
            }
        }
    }

    setInnerHtml('milisecs', miliSeconds)
    setInnerHtml('secs', seconds)
    setInnerHtml('mins', minutes)
    setInnerHtml('hrs', hours)    
    
}


let colon = document.querySelectorAll('.colon')

startBtn.addEventListener('click', () => {
    colon.forEach(item => item.classList.add('animate'))
    let myInterval = window.setInterval(myStopwatch, 10)
    
    pauseBtn.addEventListener('click', () => {
        colon.forEach(item => item.classList.remove('animate'))
        window.clearInterval(myInterval)
    })
})

restartBtn.addEventListener('click', () => {
    miliSeconds = "00"
    seconds = "00"
    minutes = "00"
    hours = "00"
    setInnerHtml('milisecs', miliSeconds)
    setInnerHtml('secs', seconds)
    setInnerHtml('mins', minutes)
    setInnerHtml('hrs', hours)  
})
