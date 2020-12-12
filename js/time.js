
const daynight = document.getElementById("typeit")

if (new Date().getHours() >= 6 && new Date().getHours() < 12){
  daynight.classList.add('day')
  console.log("day")
}

if (new Date().getHours() >= 12 && new Date().getHours() < 17){
  daynight.classList.add('afternoon')
  console.log("afternoon")
}

if (new Date().getHours() >= 17 && new Date().getHours() < 24){
  daynight.classList.add('night')
  console.log("evening")
}

if (new Date().getHours() >= 1 && new Date().getHours() < 6){
  daynight.classList.add('midnight')
  console.log("midnight")
}