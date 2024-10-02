function sale() {
    let saleDate = new Date (2024, 10, 25)
    let currentDate = new Date()
    let date = saleDate-currentDate
    let day = Math.floor(date/(24*60*60*1000))
    let hours = Math.floor((date%(24*60*60*1000)/(60*60*1000)))    
    let minutes = Math.floor((date%(60*60*1000)/(60*1000)))
    // let seconds = Math.floor((date%(60*1000))/1000)
    let timeValue = document.getElementsByClassName("date")
    timeValue[0].innerHTML=day
    timeValue[1].innerHTML=hours
    timeValue[2].innerHTML=minutes
    timeValue[3].innerHTML=day
    timeValue[4].innerHTML=hours
    timeValue[5].innerHTML=minutes
    
    
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


let wrapper = document.querySelector(".wrapper")
let popUp = document.querySelector(".wrapper .popUp")
let typ = document.querySelector(".wrapper .thankYouPage")
let btns = document.querySelectorAll("section button")

let formBtn = document.querySelector(".form button")
let username = document.getElementsByName("username")[0]
let userphone = document.getElementsByName("userphone")[0]

btns.forEach( btn => {
    btn.addEventListener("click", showpopUp)
})

wrapper.addEventListener("click", hidepopUp)

function showpopUp() {
    wrapper.style.display = "flex"
    popUp.style.display = "flex"
    typ.style.display = "none"
}

function hidepopUp() {
    let elem = event.target

    if(elem == wrapper) {
        wrapper.style.display = "none"
    }
}

formBtn.addEventListener("click", sendForm)

function sendForm() {
    event.preventDefault()
    if(username.value.length > 1) {
        if(userphone.value.length == 13) {
            showTYP()
        } else {
            console.log("Неверный номер")
        } 
    }  else {
        console.log ("Короткое имя")
    }
}


function showTYP() {
    popUp.style.display = "none"
    typ.style.display = "flex"
}



