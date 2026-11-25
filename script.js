let player = "X"
let isGameActive = true

function playerclick(cellid){
    if(!isGameActive){
        alert("Please restart Game")
        return
    }
    let cell = document.getElementById(cellid)
    if(cell.innerHTML==""){
        cell.innerHTML=player
    }
    else{
        alert("Gadha khi ka....")
        return
    }
    if(checkwinner()){
        return
    }
    if(player=="O") player="X"
    else player ="O"

    document.getElementById("result").innerHTML = player
    checkdraw()
}
function checkwinner() {
    let c1 = document.getElementById('c1').innerHTML
    let c2 = document.getElementById('c2').innerHTML
    let c3 = document.getElementById('c3').innerHTML
    let c4 = document.getElementById('c4').innerHTML
    let c5 = document.getElementById('c5').innerHTML
    let c6 = document.getElementById('c6').innerHTML
    let c7 = document.getElementById('c7').innerHTML
    let c8 = document.getElementById('c8').innerHTML
    let c9 = document.getElementById('c9').innerHTML

    let won = false
    if (player == c1 && player == c2 && player == c3) {
        won=true
        isGameActive=false
        return true
    }
    else if (player == c4 && player == c5 && player == c6) {
        won=true
    }
    else if (player == c7 && player == c8 && player == c9) {
        won =true
    }
    else if (player == c1 && player == c4 && player == c7) {
        won=true
    }
    else if (player == c2 && player == c5 && player == c8) {
        won=true
    }
    else if (player == c3 && player == c6 && player == c9) {
        won=true
    }
    else if (player == c1 && player == c5 && player == c9) {
        won=true
    }
    else if (player == c3 && player == c5 && player == c7) {
        won=true
    }
    if (won==true) {

        document.getElementById("result").innerHTML =player + " wins!"
        alert(player + " is the winner!")
        isGameActive=false
        return true
    }
    return false
}
function checkdraw() {

    let c1 = document.getElementById("c1").innerHTML
    let c2 = document.getElementById("c2").innerHTML
    let c3 = document.getElementById("c3").innerHTML
    let c4 = document.getElementById("c4").innerHTML
    let c5 = document.getElementById("c5").innerHTML
    let c6 = document.getElementById("c6").innerHTML
    let c7 = document.getElementById("c7").innerHTML
    let c8 = document.getElementById("c8").innerHTML
    let c9 = document.getElementById("c9").innerHTML

    if (c1!= "" && c2!= "" && c3!= "" && c4!= "" && c5!= "" && c6!= "" && c7!= "" && c8!= "" && c9!= "") {
        document.getElementById("result").innerHTML = "Game Draw!"
        isGameActive = false
    }
}
function restartGame() {
    document.getElementById("c1").innerHTML = ""
    document.getElementById("c2").innerHTML = ""
    document.getElementById("c3").innerHTML = ""
    document.getElementById("c4").innerHTML = ""
    document.getElementById("c5").innerHTML = ""
    document.getElementById("c6").innerHTML = ""
    document.getElementById("c7").innerHTML = ""
    document.getElementById("c8").innerHTML = ""
    document.getElementById("c9").innerHTML = ""

    player = "X"
    isGameActive = true
    document.getElementById("result").innerHTML = "Turn: X"
}