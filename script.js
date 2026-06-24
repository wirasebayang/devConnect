let loginBtn = document.querySelector('.login')
let username = JSON.parse(localStorage.getItem('username'))
let viewLog = document.querySelector('.login-btn')
let profile = document.querySelector('.name')
let profiles = document.querySelector('.name-i')
let menu = document.querySelector('.menu')
let menus = document.querySelector('.names')
let nav = document.querySelector('.navbar')
let logo =document.querySelector('.logo')
let searchBtn = document.querySelector('.search-icon')
let searchBar = document.querySelector('.searchBar')
let afterLog = document.querySelector('.afterLogin')
let logoutBtn = document.querySelector('.logout')
let formView = document.querySelector('.formLogin')
let body = document.getElementsByTagName('body')
let inputUser = document.getElementById('username')
let inputPassword = document.getElementById('password')
let submit = document.querySelector('.login-Btn')

if(username){
    viewLog.style.display = "none";
    profile.innerText = username.username[0].toUpperCase() + username.username[1].toUpperCase()
    profiles.innerText = username.username[0].toUpperCase() + username.username[1].toUpperCase()
    profile.classList.toggle('title')
    profiles.classList.toggle('title')
    menus.innerText = username.username
    nav.style.display = "none"
    logo.style.flex = "2"
    afterLog.classList.toggle('views')
}


if(submit) {
    submit.addEventListener('click', (e) => {

        e.preventDefault()
    
        if(!inputUser.value || !inputPassword.value){
            alert('Data Invalid')
        } else {
            localStorage.setItem('username', JSON.stringify({username: inputUser.value, password: inputPassword.value}))
            
            window.location.replace("index.html")
        }
    })
}


profile.addEventListener('click', () => {
    menu.classList.add('view')
})

menus.addEventListener('click', () => {
    menu.classList.remove('view')
})

searchBtn.addEventListener('click', () => {
    searchBar.style.display = "flex"
})

logoutBtn.addEventListener('click', () => {

    localStorage.removeItem('username')
    location.reload();
}
)


