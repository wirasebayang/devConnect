let formView = document.querySelector('.formLogin')
let inputUser = document.getElementById('username')
let inputPassword = document.getElementById('password')
let submit = document.querySelector('.login-Btn')

if (submit) {
    submit.addEventListener('click', (e) => {

        e.preventDefault()

        if (!inputUser.value || !inputPassword.value) {
            alert('Data Invalid')
        } else {
            localStorage.setItem('username', JSON.stringify({ username: inputUser.value, password: inputPassword.value }))

            window.location.replace("../feed/index.html")
        }
    })
}