// function toggleMenu() {
//     let right = document.querySelector(".right")
//     right.classList.toggle('active')
// }

function form() {
    let form = document.querySelector('.direction')
    form.classList.toggle('active')

}
function closed() {
    let form = document.querySelector('.direction')
    form.classList.remove('active')
}

function registered() {
    let move1 = document.querySelector('.move1')
    let move2 = document.querySelector('.move2')
    move1.classList.add('active')
    move2.classList.add('active')
}
function login() {
    let move1 = document.querySelector('.move1')
    let move2 = document.querySelector('.move2')
    move1.classList.remove('active')
    move2.classList.remove('active')
}


function toggleMenu() {
    let right = document.querySelector(".right")
    right.classList.toggle('active')
    let form = document.querySelector('.direction')
    form.classList.remove('active')
    const menu = document.querySelector('.restaurant_container')
    menu.classList.remove('active')
}

function form() {
    let form = document.querySelector('.direction')
    form.classList.toggle('active')

}
function closed() {
    let form = document.querySelector('.direction')
    form.classList.remove('active')
}

function registered() {
    let move1 = document.querySelector('.move1')
    let move2 = document.querySelector('.move2')
    move1.classList.add('active')
    move2.classList.add('active')
}
function login() {
    let move1 = document.querySelector('.move1')
    let move2 = document.querySelector('.move2')
    move1.classList.remove('active')
    move2.classList.remove('active')
}

function more() {
    const Cards = document.querySelectorAll('.hid');
    const moreButton = document.getElementById('moreButtonImage');
    Cards.forEach(card => {
        card.classList.toggle('active');

    });
    const Show = Cards[0].classList.contains('active');
    if (Show) {
        moreButton.src = './more_up.svg';
        moreButton.alt = 'Show Less';
    } else {
        moreButton.src = './more_down.svg';
        moreButton.alt = 'Show More';
    }
}

function restaurant() {
    const menu = document.querySelector('.restaurant_container')
    menu.classList.toggle('active')
}

window.onclick = function (close) {
    const form = document.querySelector('.direction');
    if (close.target === form) {
        closed();
    }
}

window.onkeydown = function (close) {
    if (close.key === 'Escape') {
        closed();
    }
    if (close.key === 'Delete') {
        closed();
    }

};