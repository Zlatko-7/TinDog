import dogs from './data.js'
import Dog from './Dog.js'

let currentIndex = 0
let currentDog = new Dog(dogs[currentIndex])

const likeBtn = document.getElementById('like-btn')
const rejectBtn = document.getElementById('reject-btn')
const liked = document.getElementById('liked')
const reject = document.getElementById('reject')

document.getElementById('like-btn').addEventListener('click', likeDog)
document.getElementById('reject-btn').addEventListener('click', rejectDog)

function getNextDog() {
      currentIndex += 1
      currentDog = new Dog(dogs[currentIndex])
      render()

    if(currentIndex === dogs.length) {
      document.body.innerHTML = `<div class='end-message'>There are no more dogs in the area</div>`
    }
    
    liked.innerHTML = ''
    reject.innerHTML = ''
    likeBtn.disabled = false
    rejectBtn.disabled = false
 }

function likeDog() {
      liked.innerHTML = `<img class='liked' src="images/badge-like.png">`
      setTimeout(() => getNextDog(), 2000)
      rejectBtn.disabled = true
      likeBtn.disabled = true
    }
  

function rejectDog() {
    reject.innerHTML = `<img class='reject' src="images/badge-nope.png">`
    setTimeout(() => getNextDog(), 2000)
    rejectBtn.disabled = true
    likeBtn.disabled = true
  } 

function render() {
document.getElementById('card').innerHTML = currentDog.dogHtml()
}

render()







