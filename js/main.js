const btns = document.querySelectorAll('.btn')

for (const btn of btns) {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    btn.innerText = 'O'
  })
}

//make the grid by pushing the input btn into an array
let gameGrid = []

const winConditions = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[2,4,6],
[0,3,6],
[1,4,7],
[2,5,8]
]



document.addEventListener('click',playGame)

function playGame(){

while(true){
  let input = document.getElementsByClassName('btn')
  if(input === winConditions){
    break
  }

}

gameGrid.push(input)

console.log(gameGrid)

}

//win conditions--> starting top left to right, top to bottom assigned value to squares and placed in an array to easily visualize

/*const winConditions = [
['zero', 'one', 'two'],
['three', 'four', 'five'],
['six','seven','eight'],
['zero', 'three', 'six'],
['one','four','seven'],
['two','five','eight'],
['zero','four','eight'],
['two','four','six']
]

function play(){
  if
}


//player move
/*
let playerOne = 'X'
let playerTwo = 'O'

function takeTurns(){
  if turn === playerOne{
    btn.innerText = 'X'
  }else{
    btn.innerText = 'O'
  }
}
*/

//robot and/or player 2 moves

//validate results

