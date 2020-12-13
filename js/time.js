
const daynight = document.getElementById("typeit")

if (new Date().getHours() >= 5 && new Date().getHours() < 12){
  daynight.classList.add('day')
  console.log("day")
}

if (new Date().getHours() >= 12 && new Date().getHours() < 18){
  daynight.classList.add('afternoon')
  console.log("afternoon")
}

if (new Date().getHours() >= 18 && new Date().getHours() < 24){
  daynight.classList.add('night')
  console.log("evening")
}

if (new Date().getHours() >= 24 && new Date().getHours() < 5){
  daynight.classList.add('midnight')
  console.log("midnight")
}