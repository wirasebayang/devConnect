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
let aboutUs = document.querySelector('.timKami')
let displayUs = document.querySelector('.tim')

if (username) {
    profile.innerText = username.username[0].toUpperCase() + username.username[1].toUpperCase()
    profiles.innerText = username.username[0].toUpperCase() + username.username[1].toUpperCase()
    profile.classList.toggle('title')
    profiles.classList.toggle('title')
    menus.innerText = username.username
    afterLog.classList.toggle('views')
    // let edit = localStorage.getItem('username')

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

    aboutUs.addEventListener('click', (e) => {
        displayUs.classList.toggle('display')
    })
}

let feedBtn = document.querySelector(".btn-post");
let feedContainer = document.querySelector(".feedContainer");
let feed = [{}]

feedBtn.addEventListener("click", () => {
    // e.preventDefault()
    let author = username.username
    let handle = "@" + username.username.toLowerCase()
    let avatar = username.username[0].toUpperCase() + username.username[1].toUpperCase()
    let text = document.querySelector('.inputStat').value;
    console.log('aaaaaa')

    let post = document.createElement("div");
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

    // let statusObj = localStorage.setItem('status', JSON.stringify([]))
    // let obj = JSON.parse(localStorage.getItem("status"))

    //status; {}

    // if (!obj[username.username]) {
    //     JSON.stringify(obj[username.username], {avatar: avatar, author: author, handle: handle, text: text })
    // }

    // console.log(obj);
    // console.log(avatar, author, handle, text);

    for (let i = 0; i < feed.length; i++) {

        if (!feed[i][author]) {
            feed[author] = {
                avatar: avatar,
                author: author,
                handle: handle,
                text: []
            }
        }

        feed[author].text.push(text)
    }

    // localStorage.setItem('status', JSON.stringify({ avatar: avatar, author: author, handle: handle, text: text }))


    feedContainer.prepend(post);

    // kosongkan form setelah posting
    localStorage.setItem('status', JSON.stringify(feed))
    document.querySelector(".inputStat").value = "";
    console.log(feed);
    // return feedDb
});