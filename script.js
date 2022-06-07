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

const grid = document.quertySelection('.grid')
 var.cardsChosen = []
 var.cardsChosenId = []


  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('scr', 'images/CardBack1.png')
      card.setAttribute('data-id', i)

      grid.appendChild(card)
 
    
    }}
}

function flipCard() {
  var cardid = this.getAttribute('data-id')
  cardChosen.push(cardArray[cardId].name)
  cardsChosenid
}

createBoard()
