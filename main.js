let input = document.getElementById("input")
let par = document.getElementById("par")

input.addEventListener('keyup', vvod)
function vvod(){
    par.innerHTML = input.value
}
let start = document.getElementById("start")
let top1 = document.getElementById("top")
let left = document.getElementById("left")
let right = document.getElementById("right")
let down = document.getElementById("down")
let player = document.getElementById("player")
let color = document.getElementById("color")
let v = 0
let h = 0
let speed = 20

start.addEventListener("click", letStart)
function letStart(){
    player.style.opacity = "1"
    player.style.backgroundColor = color.value
}

right.addEventListener("click", vpravo)
function vpravo(){
    h += speed
    if(h > 730){
        alert("Финиш")
    } else {
        console.log(h, player.style.left)
        player.style.left = h + "px"
        player.style.backgroundImage = "url('https://www.clipartmax.com/png/middle/9-99905_harry-potter-harry-potter-cartoon-drawing.png')"
    }
}

left.addEventListener("click", vlevo)
function vlevo(){
    h -= speed
    if(h < 0){
        alert("За крату выходить нельзя")
    } else {
        console.log(h, player.style.left)
        player.style.left = h + "px"
        player.style.backgroundImage = "url('https://www.clipartmax.com/png/middle/9-99905_harry-potter-harry-potter-cartoon-drawing.png')"
    }
}

top1.addEventListener("click", vverh)
function vverh(){
    v -= speed
    if(v < 0){
        alert("За крату выходить нельзя")
    } else {
        console.log(v, player.style.top)
        player.style.top = v + "px"
        player.style.backgroundImage = "url('https://www.clipartmax.com/png/middle/9-99905_harry-potter-harry-potter-cartoon-drawing.png')"
    }
}

down.addEventListener("click", vniz)
function vniz(){
    v += speed
    if(v > 339){
        alert("За крату выходить нельзя")
    } else {
        console.log(v, player.style.top)
        player.style.top = v + "px"
        player.style.backgroundImage = "url('https://www.clipartmax.com/png/middle/9-99905_harry-potter-harry-potter-cartoon-drawing.png')"
    }
}