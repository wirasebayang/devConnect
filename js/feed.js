let logo = document.querySelector('.logo')
let username = JSON.parse(localStorage.getItem('username'))
let profile = document.querySelector('.name')
let profiles = document.querySelector('.name-i')
let menu = document.querySelector('.menu')
let menus = document.querySelector('.names')
let searchBtn = document.querySelector('.search-icon')
let searchBar = document.querySelector('.searchBar')
let afterLog = document.querySelector('.afterLogin')
let logoutBtn = document.querySelector('.logout')

if (username) {
    profile.innerText = username.username[0].toUpperCase() + username.username[1].toUpperCase()
    profiles.innerText = username.username[0].toUpperCase() + username.username[1].toUpperCase()
    profile.classList.toggle('title')
    profiles.classList.toggle('title')
    menus.innerText = username.username
    afterLog.classList.toggle('views')

    profile.addEventListener('click', () => {
        menu.classList.add('view')
    })

    menus.addEventListener('click', () => {
        menu.classList.remove('view')
    })

    searchBtn.addEventListener('click', () => {
        searchBar.classList.toggle('toogle')
    })
    
    logoutBtn.addEventListener('click', () => {
    
        let hasil = window.confirm("Apakah Anda yakin ingin keluar?");
    
        if (hasil) {
            localStorage.removeItem('username')
            window.location.replace("../index.html")
        }
    
    }
    )
}

logo.addEventListener('click', () => {
    let hasil = window.confirm("Apakah Anda yakin ingin keluar?");

    if (hasil) {
        localStorage.removeItem('username')
        window.location.replace("../index.html")
    } 

})