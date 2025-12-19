
function toggleMenu() {
    let right = document.querySelector(".right")
    right.classList.toggle('active')
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


window.onclick = function (close) {
    const form = document.querySelector('.direction');
    if (close.target === form) {
        closed();
    }
}

window.onkeydown = function (close) {
    if (close.key === 'Escape' || close.key === 'Delete') {
        closed();
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.move1');
    const registerForm = document.querySelector('.move2');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                alert('Login successful! Welcome back to Delivery Bdu.');
                closed();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('regUsername').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const terms = document.getElementById('terms').checked;

            if (username && email && password && terms) {
                alert('Registration successful! Welcome to Delivery Bdu.');
                closed();
            } else if (!terms) {
                alert('Please agree to the terms & conditions.');
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});