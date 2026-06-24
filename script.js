let loginBtn = document.querySelector('.login')
let username = localStorage.getItem('username');
let viewLog = document.querySelector('.login-btn')
let profile = document.querySelector('.name')
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

if(username){
    viewLog.style.display = "none";
    profile.style.color = " var(--cyan)"
    profile.style.fontWeight = "600"
    profile.innerText = username[0].toUpperCase() + username[1].toUpperCase()
    profile.classList.toggle('title')
    menus.innerText = username
    nav.style.display = "none"
    logo.style.flex = "2"
    afterLog.classList.toggle('views')
    // formView.classList.toggle('formView')
}

loginBtn.addEventListener('click', () => {  

    // formView.classList.toggle('formView')
    

    let name = prompt('Masukan nama mu');
    
    if(!name){
        alert('Data Invalid')
        e
    } else {

        JSON.stringify(localStorage.setItem('username', name))
    }

    // event.preventDefault()
})

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


