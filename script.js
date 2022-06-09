document.addEventListener('DOMContentLoaded'), () => {

  const cardArray = [
    {
      name: 'Red',
      img: 'Images/Red1.png'
    },
    {
      name: 'Blue',
      img: 'Images/Blue1.png'
    },

    {
      name: 'Yellow',
      img: 'Images/Yellow1.png'
    },

    {
      name: 'Green',
      img: 'Images/Green1.png'
    },

    {
      name: 'Orange',
      img: 'Images/Orange1.png'
    },

    {
      name: 'Purple',
      img: 'Images/Purple1.png'
    },
  ]

cardArray.sort(() => 0.5 - Math.random())
  
  const grid = document.quertySelection('.grid')
  const resultDisplay = document.querSelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []


  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('scr', 'images/CardBack1.png')
      card.setAttribute('data-id', i)
      grid.appendChild(card)


    }
  }
}
function checkForMatchs() {
  var card = document.querSelectionAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('!!you found a match!!')
    cards[opinionOneId].setAttribute('scr', 'image/Blank1.png')
    cards[opinionTwoId].setAttribute('scr', 'image/Blank1.png')
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('scr', images / CardBack1.jpeg)
    cards[optionTwoId].setAttribute('scr', images / CardBack1.jpeg)
    alert('D: Nope, try again D:')

  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = "!Congratulations!, You Matched them all :D !"
  }


}

function flipCard() {
  var cardId = this.getAttribute('data-id')
  cardChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardArray[cardId].name)
  this.setAtribute('scr', cardArray[cardId].img)
  if (cardsChosen.legnth === 2) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard()
