let burger = document.querySelector('.burger')
let nav = document.querySelector('header nav ul')

burger.addEventListener('click', () => {

    if (nav.style.opacity == '1') {
        nav.style.opacity = '0'
        nav.style.transform = 'scale(0.7) translate(1200px, 0px)'
        console.log('none added')
    } else if (nav.style.opacity == '0' || nav.style.opacity.length < 1) {
        nav.style.opacity = '1'
        nav.style.transform = 'scale(1) translate(0px, 0px)'
        console.log('flex added')
    } 

    if (burger.classList.contains('clicked')) {
        burger.classList.remove('clicked')
    } else {
        burger.classList.add('clicked')
    }   
})





//Practise Area
function createSquare(length) {
    return {
        length,
        area: function() {
            console.log(this.length * 4)
        }
    }
}

const circle = createSquare(40)
console.log(circle.area())



function Square(length) {
    this.length = length,
    this.area = function() {
        console.log(this.length * 4)
    }
}

const another = new Square(4)
console.log(another.area())

