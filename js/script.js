let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let controlButton = document.querySelector('.controlButton')
let some = 0

controlButton.addEventListener('click', ()=>{
    if(controlButton.innerText==='pause'){
        some=1
        controlButton.innerText='start'
    }
    else if(controlButton.innerText==='restart'){
        some=0
        controlButton.innerText='pause'
    }
    else if(controlButton.innerText==='start'){
        some=0
        controlButton.innerText='pause'
    }
    restart()    
})

function addZero(num){
    num<10 && num>=0 ? num='0'+num : ''
    return num
}
function restart(){
        let timer = setInterval(()=>{
        if(some===1){
            clearInterval(timer)
            return 0
        }
        let second = Number(seconds.innerText)
        let minute = Number(minutes.innerText)
        second--
        if(second===(-1)){
            if(minute===0){
                clearInterval(timer)
                return 0
            }
            second=59
            minute--
            minutes.innerText=minute
            
        }
        seconds.innerText=addZero(second)
    }, 1000)
}