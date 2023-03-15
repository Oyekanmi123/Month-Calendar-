const monthInx = new Date().getMonth()
const monthEl = document.querySelector(".date h2")
const fullDateEl = document.querySelector(".date p")
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate()
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay()
const daysEl = document.querySelector(".days")

const months = [
    "January",
    "Ferbruary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

monthEl.innerText = months[monthInx]
fullDateEl.innerText = new Date().toDateString()

let days = ""

for(let i = firstDay; i > 0; i-- ){
    days += `<div class="empty"></div>`
}

for (let i = 1; i <= lastDay; i++){
    if(i === new Date().getDate()){
        days += `<div class= "today">${i}</div>`
    }else{
        days += `<div>${i}</div>`
    }
}

daysEl.innerHTML = days