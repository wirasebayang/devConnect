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

const feedBtn = document.querySelector(".btn-post");
const feedContainer = document.querySelector(".feedContainer");
const searchInput = document.querySelector(".searchBar");

const editModal = document.getElementById("editModal");
const deleteModal = document.getElementById("deleteModal");

const editInput = document.getElementById("editInput");

const saveEdit = document.getElementById("saveEdit");
const cancelEdit = document.getElementById("cancelEdit");

const confirmDelete = document.getElementById("confirmDelete");
const cancelDelete = document.getElementById("cancelDelete");

const close = document.querySelector('.close')
const closeIcon = document.querySelector('.closeIcon')

let selectedId = null;

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

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !profile.contains(e.target)) {
            menu.classList.remove('view');
        }
    });

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

    close.addEventListener('click', () => {
        displayUs.classList.toggle('display')
        close.classList.toggle('closeDisplay')
    })

    aboutUs.addEventListener('click', () => {
        displayUs.classList.toggle('display')
        close.classList.toggle('closeDisplay')
        menu.classList.toggle('view')
    })

    // aboutUs.addEventListener('click', (e) => {
    //     displayUs.classList.toggle('display')
    // })
}

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


    if (hasil) {
        localStorage.removeItem('username')
        window.location.replace("../index.html")
    }

})





feedBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const author = username.username;
    const handle = "@" + username.username.toLowerCase();
    const avatar = username.username.slice(0, 2).toUpperCase();

    const text =
        document.querySelector(".inputStat").value;

    const file =
        imageUpload.files[0];

    const code =
        codeInput.value;

    if (!text.trim() && !file && !code.trim()) return;

    const saveStatus = (image = null) => {

        const newStatus = {
            id: Date.now(),
            author,
            handle,
            avatar,
            text,
            code,
            image,
            likes: 0,
            likedBy: [],
            comments: [],
            createdAt: new Date()
        };

        let statuses =
            JSON.parse(localStorage.getItem("status")) || [];

        statuses.unshift(newStatus);

        localStorage.setItem(
            "status",
            JSON.stringify(statuses)
        );

        loadPosts();

        document.querySelector(".inputStat").value = "";
        imageUpload.value = "";
        fileName.textContent = "";
        codeInput.value = "";
        codeWrapper.classList.add("hidden");
        imagePreview.src = "";
        imagePreview.classList.add("hidden");
    };

    if (file) {

        const reader = new FileReader();

        reader.onload = function (event) {
            saveStatus(event.target.result);
        };

        reader.readAsDataURL(file);

    } else {

        saveStatus();

    }

});


feedContainer.addEventListener("click", (e) => {

    const post = e.target.closest(".post");

    if (!post) return;

    const id = Number(post.dataset.id);

    const statuses =
        JSON.parse(localStorage.getItem("status")) || [];

    // ==================
    // EDIT
    // ==================
    if (e.target.classList.contains("edit-btn")) {

        const status =
            statuses.find(item => item.id === id);

        selectedId = id;

        editInput.value = status.text;

        editModal.classList.add("active");
    }

    // ==================
    // DELETE
    // ==================
    if (e.target.classList.contains("delete-btn")) {

        selectedId = id;

        deleteModal.classList.add("active");
    }


    if (e.target.closest(".like-btn")) {

        const status =
            statuses.find(item => item.id === id);

        const currentUser = username.username;

        if (!status.likedBy) {
            status.likedBy = [];
        }

        const alreadyLiked =
            status.likedBy.includes(currentUser);

        if (alreadyLiked) {

            // UNLIKE
            status.likes--;

            status.likedBy =
                status.likedBy.filter(
                    user => user !== currentUser
                );

        } else {

            // LIKE
            status.likes++;

            status.likedBy.push(currentUser);
        }

        localStorage.setItem(
            "status",
            JSON.stringify(statuses)
        );

        loadPosts();

        return;
    }

    if (e.target.closest(".comment-btn")) {

        selectedId = id;

        const statuses =
            JSON.parse(localStorage.getItem("status")) || [];

        const status =
            statuses.find(item => item.id === id);

        commentList.innerHTML = "";

        status.comments.forEach(comment => {

            commentList.innerHTML += `
            <div class="comment-item">
                <strong>${comment.author}</strong>
                <p>${comment.text}</p>
            </div>
        `;
        });

        commentModal.classList.add("active");
    }
});


function escapeHtml(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function timeAgo(date) {

    const seconds =
        Math.floor(
            (new Date() - new Date(date)) / 1000
        );

    if (seconds < 60)
        return `${seconds} detik lalu`;

    const minutes =
        Math.floor(seconds / 60);

    if (minutes < 60)
        return `${minutes} menit lalu`;

    const hours =
        Math.floor(minutes / 60);

    if (hours < 24)
        return `${hours} jam lalu`;

    const days =
        Math.floor(hours / 24);

    if (days < 30)
        return `${days} hari lalu`;

    const months =
        Math.floor(days / 30);

    if (months < 12)
        return `${months} bulan lalu`;

    const years =
        Math.floor(months / 12);

    return `${years} tahun lalu`;
}

function renderPost(data) {

    const postTime = timeAgo(data.createdAt);

    const post = document.createElement("div");

    post.classList.add("post");
    post.dataset.id = data.id;

    const isLiked =
        data.likedBy &&
        data.likedBy.includes(username.username);

    const imageHTML = data.image
        ? `<img src="${data.image}" class="post-image">`
        : "";

    const codeHTML =
        data.code && data.code.trim()
            ? `
                <div class="code-block">

                    <div class="code-header">
                        <span>Code</span>

                        <div class="copy-btn" title="Copy code">
                            📋
                        </div>
                    </div>

                    <pre class="post-code">
                        <code class="language-javascript">${escapeHtml(data.code)}</code>
                    </pre>

                </div>
            `
            : "";

    post.innerHTML = `
    <div class="post-header">

        <div class="avatar">${data.avatar}</div>

        <div class="post-meta">
            <span class="post-author">${data.author}</span>
            <span class="post-handle">
                ${data.handle} · ${postTime}
            </span>
        </div>

        <div class="post-menu">
            <button class="menu-btn">⋮</button>

            <div class="dropdown-menu">
                <div class="dropdown-item edit-btn">✏️ Edit</div>
                <div class="dropdown-item delete-btn">🗑️ Hapus</div>
            </div>
        </div>

    </div>

    <p class="post-text">${data.text}</p>

    ${codeHTML}

    ${imageHTML}

    <div class="post-actions">

        <div class="btn-action like-btn">
            ${isLiked ? "❤️" : "🤍"} ${data.likes}
        </div>

        <div class="btn-action comment-btn">
            💬 ${data.comments.length}
        </div>

    </div>

    <div class="comments-container"></div>
    `;

    feedContainer.prepend(post);
}

function loadPosts(data = null) {

    feedContainer.innerHTML = "";

    const statuses =
        data ||
        JSON.parse(localStorage.getItem("status")) ||
        [];

    for (let i = statuses.length - 1; i >= 0; i--) {
        renderPost(statuses[i]);
    }

    statuses.forEach(status => {

        if (!status.likes) {
            status.likes = 0;
        }

        if (!status.likedBy) {
            status.likedBy = [];
        }

        if (!status.comments) {
            status.comments = [];
        }

    });

    document
        .querySelectorAll("pre code")
        .forEach(block => {

            hljs.highlightElement(block);

        });
}

window.addEventListener("DOMContentLoaded", () => {
    loadPosts();
});


saveEdit.addEventListener("click", () => {

    let statuses =
        JSON.parse(localStorage.getItem("status")) || [];

    const status =
        statuses.find(item => item.id === selectedId);

    status.text = editInput.value;

    localStorage.setItem(
        "status",
        JSON.stringify(statuses)
    );

    editModal.classList.remove("active");

    loadPosts();
});


confirmDelete.addEventListener("click", () => {

    let statuses =
        JSON.parse(localStorage.getItem("status")) || [];

    statuses = statuses.filter(
        item => item.id !== selectedId
    );

    localStorage.setItem(
        "status",
        JSON.stringify(statuses)
    );

    deleteModal.classList.remove("active");

    loadPosts();
});


cancelEdit.addEventListener("click", () => {
    editModal.classList.remove("active");
});

cancelDelete.addEventListener("click", () => {
    deleteModal.classList.remove("active");
});

feedContainer.addEventListener("click", (e) => {

    if (e.target.classList.contains("menu-btn")) {

        const menu =
            e.target.nextElementSibling;

        document
            .querySelectorAll(".dropdown-menu")
            .forEach(item => {

                if (item !== menu) {
                    item.classList.remove("active");
                }
            });

        menu.classList.toggle("active");
    }

});

document.addEventListener("click", (e) => {

    if (
        !e.target.closest(".post-menu")
    ) {

        document
            .querySelectorAll(".dropdown-menu")
            .forEach(menu => {
                menu.classList.remove("active");
            });

    }

});


const commentModal =
    document.getElementById("commentModal");

const commentInput =
    document.getElementById("commentInput");

const commentList =
    document.getElementById("commentList");

const sendComment =
    document.getElementById("sendComment");

const closeComment =
    document.getElementById("closeComment");

const imageUpload =
    document.getElementById("imageUpload");

const fileName =
    document.getElementById("fileName");

const imagePreview =
    document.getElementById("imagePreview");

const codeBtn =
    document.querySelector(".btn-code");

const codeWrapper =
    document.querySelector(".code-wrapper");

const codeInput =
    document.querySelector(".codeInput");

codeBtn.addEventListener("click", () => {

    codeWrapper.classList.toggle("hidden");

});




sendComment.addEventListener("click", () => {

    const text = commentInput.value;

    if (!text.trim()) return;

    let statuses =
        JSON.parse(localStorage.getItem("status")) || [];

    const status =
        statuses.find(item => item.id === selectedId);

    status.comments.push({
        author: username.username,
        text
    });

    localStorage.setItem(
        "status",
        JSON.stringify(statuses)
    );

    commentInput.value = "";

    commentModal.classList.remove("active");

    loadPosts();
});

closeComment.addEventListener("click", () => {
    commentModal.classList.remove("active");
});

imageUpload.addEventListener("change", () => {

    if (imageUpload.files.length) {

        const file =
            imageUpload.files[0];

        fileName.textContent =
            file.name;

        const reader =
            new FileReader();

        reader.onload = function (e) {

            imagePreview.src =
                e.target.result;

            imagePreview.classList.remove("hidden");
        };

        reader.readAsDataURL(file);

    } else {

        fileName.textContent = "";

        imagePreview.src = "";

        imagePreview.classList.add("hidden");
    }

});


feedContainer.addEventListener("click", async (e) => {

    if (e.target.classList.contains("copy-btn")) {

        const code =
            e.target
                .closest(".code-block")
                .querySelector("code")
                .innerText;

        navigator.clipboard.writeText(code);

        e.target.innerHTML = "✓";

        setTimeout(() => {
            e.target.innerHTML = "📋";
        }, 1500);
    }
});

setInterval(() => {
    loadPosts();
}, 60000);

searchInput.addEventListener("input", () => {

    const keyword =
        searchInput.value.toLowerCase();

    const statuses =
        JSON.parse(localStorage.getItem("status")) || [];

    const filtered =
        statuses.filter(status => {

            return (
                status.author.toLowerCase().includes(keyword) ||
                status.text.toLowerCase().includes(keyword) ||
                (status.code &&
                    status.code.toLowerCase().includes(keyword))
            );

        });

    loadPosts(filtered);

});