const slots = document.querySelectorAll('.square-slot')











// const game = {
//   xTurn: true,
//   xState: [],
//   oState: [],
//   winningStates: [
//       // Rows
//       ['0', '1', '2'],
//       ['3', '4', '5'],
//       ['6', '7', '8'],

//       // Columns
//       ['0', '3', '6'],
//       ['1', '4', '7'],
//       ['2', '5', '8'],

//       // Diagonal
//       ['0', '4', '8'],
//       ['2', '4', '6']
//   ]
// }


// document.addEventListener('click', event => {
//   const target = event.target
//   const isCell = target.classList.contains('square-slot')
//   const isDisabled = target.classList.contains('disabled')

//   if (isCell && !isDisabled) {
//     const cellValue = target.dataset.value

// game.xTurn === true
//     ? game.xState.push(cellValue)
//     : game.oState.push(cellValue)

// target.classList.add('disabled')
// target.classList.add(game.xTurn ? 'x' : 'o')

// game.xTurn = !game.xTurn
//       // The player clicked on a cell that is still empty
//   }
// })

// if (!document.querySelectorAll('.square-slot:not(.disabled)').length) {
//   document.querySelector('.game-over').classList.add('visible')
//   document.querySelector('.game-over-text').textContent = 'Draw!'
// }

// game.winningStates.forEach(winningState => {
//   const xWins = winningState.every(state => game.xState.includes(state))
//   const oWins = winningState.every(state => game.oState.includes(state))

//   if (xWins || oWins) {
//       document.querySelectorAll('.square-slot').forEach(cell => cell.classList.add('disabled'))
//       document.querySelector('.game-over').classList.add('visible')
//       document.querySelector('.game-over-text').textContent = xWins
//           ? 'X wins!'
//           : 'O wins!'
//   }
// })

// document.querySelector('.restart').addEventListener('click', () => {
//   document.querySelector('.game-over').classList.remove('visible')
//   document.querySelectorAll('.square-slot').forEach(cell => {
//       cell.classList.remove('disabled', 'x', 'o')
//   })

//   game.xTurn = true
//   game.xState = []
//   game.oState = []
// })