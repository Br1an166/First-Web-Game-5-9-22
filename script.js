document.addEventListener('DOMContentLoaded', () => {


  const cardArray = [
    {
      name: 'Blue1',
      img: 'images/Blue1.png'
    },
    {
      name: 'Blue1',
      img: 'images/Blue1.png'
    },
    {
      name: 'Red1',
      img: 'images/Red1.png'
    },
    {
      name: 'Red1',
      img: 'images/Red1.png'
    },
    {
      name: 'Yellow1',
      img: 'images/Yellow1.png'
    },
    {
      name: 'Yellow1',
      img: 'images/Yellow1.png'
    },
    {
      name: 'Orange1',
      img: 'images/Green1.png'
    },
    {
      name: 'Orange1',
      img: 'images/Green1.png'
    },
    {
      name: 'Purple1',
      img: 'images/Purple1.png'
    },

    {
      name: 'Purple1',
      img: 'images/Purple1.png'
    },

  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []


  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/CardBack1.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }


  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/CardBack1.png')
      cards[optionTwoId].setAttribute('src', 'images/CardBack1.png')
      alert('! You matched wrong D: !')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('! You matched :D !')
      cards[optionOneId].setAttribute('src', 'images/Blank1.png')
      cards[optionTwoId].setAttribute('src', 'images/Blank1.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/CardBack.png')
      cards[optionTwoId].setAttribute('src', 'images/CardBack.png')
      alert('Nope, try again D: ')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = '!Congratulations! You found them all :D !!'
    }
  }


  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})