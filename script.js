const addedtitle = document.querySelector("#addedtitle")
const addedtext = document.querySelector("#addedtext")
const addnotebutton = document.querySelector(".addnote")
const space = document.querySelector(".space")
const searchbutton = document.querySelector("#searchbutton")
const crossbutton = document.querySelector(".cross")
addnotebutton.addEventListener("click", () => {
    read()
    create()
    addedtitle.value = ""
    addedtext.value = ""
})

function read() {
    localStorage.setItem("titleval", addedtitle.value)
    localStorage.setItem("textval", addedtext.value)
}
function create() {
    let newnote = document.createElement("div")
    newnote.className = "text"
    let newnotetitle = document.createElement("h2")
    newnotetitle.textContent = localStorage.titleval
    newnotetitle.className = "texttitle"
    newnote.appendChild(newnotetitle)
    let newnotetext = document.createElement("p")
    newnotetext.className = "textcontent"
    newnotetext.textContent = localStorage.textval
    newnote.appendChild(newnotetext)
    let buttons = document.createElement("div")
    buttons.className = "buttonsdiv"
    newnote.appendChild(buttons)
    buttons.innerHTML += "<button class='buttons' onclick='deleteit(this)'><img height='18' width='18' src='icons\\delete_FILL0_wght400_GRAD0_opsz48.png'></button>"
    buttons.innerHTML += "<button class='buttons' onclick='editit(this)'><img height='19' width='19' src='icons\\edit_note_FILL0_wght400_GRAD0_opsz48.png'></button>"
    space.appendChild(newnote)
}

const textitledivs = document.getElementsByClassName("texttitle")
const textcontentdivs = document.getElementsByClassName("textcontent")
const searchval = document.querySelector("#search")
let searchstring = searchval.value
searchbutton.addEventListener("click", () => {
    for (i = 0; i < textitledivs.length; i++) {
        if ((searchval.value).includes(textitledivs[i].textContent) || (searchval.value).includes(textcontentdivs[i].textContent)) {
            textitledivs[i].parentElement.style.borderColor = "red"
            textcontentdivs[i].parentElement.style.borderColor = "red"
        }
        else {
            textitledivs[i].parentElement.style.display = "none"
            textcontentdivs[i].parentElement.style.display = "none"
        }
    }
})
crossbutton.addEventListener("click", () => {
    for (i = 0; i < textitledivs.length; i++) {
        textitledivs[i].parentElement.style.display = "block"
        textitledivs[i].parentElement.style.borderColor = "lightgrey"
        searchval.value = ""
    }
})

function deleteit(e) {
    e.parentElement.parentElement.remove()
}
let addedtitle1 = document.querySelector("#addedtitle1")
let addedtext1 = document.querySelector("#addedtext1")
function editit(e) {
    document.querySelector(".createnote").style.display = "none"
    document.querySelector(".editclass").style.display = "flex"
    document.querySelector(".editnote").addEventListener("click", () => {
        e.parentElement.previousSibling.previousSibling.textContent = addedtitle1.value
        e.parentElement.previousSibling.textContent = addedtext1.value
        addedtitle1.value = ""
        addedtext1.value = ""
        addedtitle.value = ""
        addedtext.value = ""
        document.querySelector(".createnote").style.display = "flex"
        document.querySelector(".editclass").style.display = "none"
    })
}
