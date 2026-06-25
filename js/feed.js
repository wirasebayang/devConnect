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

const initData = [
    { id: 1, status: "Build fitur chat realtime", like: 25 },
    { id: 2, status: "Integrasi payment gateway", like: 19 },
    { id: 3, status: "Setup CI/CD pipeline", like: 11 },
    { id: 4, status: "Testing end-to-end pakai Playwright", like: 6 },
    { id: 5, status: "Launching MVP minggu ini", like: 30 },
],

function getDataLocal(key) {
    if (!key) {
        return null
    }
    return JSON.parse(localStorage.getItem(key))
}

function setDataFeedLocal(key, payload) {
    if (!key || !payload) {
        return false
    }

    localStorage.setItem(key, JSON.stringify(payload))

    return true
}

const feedBtn = document.querySelector(".btn-post");
const feedContainer = document.querySelector(".feedContainer");

feedBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const author = username.username
    const handle = "@" + username.username.toLowerCase()
    const avatar = username.username[0].toUpperCase() + username.username[1].toUpperCase()
    const text = document.querySelector('.inputStat').value;
    console.log('aaaaaa')

    const post = document.createElement("div");
    post.classList.add("post");

    post.innerHTML = `
    <div class="post-header">
      <div class="avatar">${avatar}</div>

      <div class="post-meta">
        <span class="post-author">${author}</span>
        <span class="post-handle">${handle} · baru saja</span>
      </div>
    </div>

    <p class="post-text">${text}</p>

    <div class="post-actions">
      <div class="btn-action">♡ 0</div>
      <div class="btn-action">💬 0</div>
      <div class="btn-action">↗</div>
    </div>
  `;

    let statusObj = localStorage.setItem('status', JSON.stringify([]))
    let obj = JSON.parse(localStorage.getItem("status"))

    //status; {}

    // if (!obj[username.username]) {
    //     JSON.stringify(obj[username.username], {avatar: avatar, author: author, handle: handle, text: text })
    // }

    // console.log(obj);
    console.log(avatar, author, handle, text);
    // localStorage.setItem('status', JSON.stringify({ avatar: avatar, author: author, handle: handle, text: text }))
    // feedContainer.prepend(post);

    // kosongkan form setelah posting
    // document.querySelector(".inputstat").innerHTML = "";
});

setDataFeedLocal('status', initData)

console.log(getDataLocal('status'));
const dataFeeds = getDataLocal('status');

if (!dataFeeds || dataFeeds.length === 0) {
    setDataFeedLocal('status', initData)

}