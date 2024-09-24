function sale() {
    let saleDate = new Date (2024, 8, 25)
    let currentDate = new Date()
    let date = saleDate-currentDate
    let day = Math.floor(date/(24*60*60*1000))
    let hours = Math.floor((date%(24*60*60*1000)/(60*60*1000)))    
    let minutes = Math.floor((date%(60*60*1000)/(60*1000)))
    let seconds = Math.floor((date%(60*1000))/1000)
    let timeValue = document.getElementsByClassName("date")
    timeValue[0].innerHTML=day
    timeValue[1].innerHTML=hours
    timeValue[2].innerHTML=minutes
    timeValue[3].innerHTML=seconds
    
    if (date <= 0){
        timeValue[0].innerHTML=0
        timeValue[1].innerHTML=0
        timeValue[2].innerHTML=0
        timeValue[3].innerHTML=0
        
    }
    
}

sale()

setInterval(() => {
    sale()
},1000);