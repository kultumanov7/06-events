const btn = document.querySelector('#btn');
const text = document.querySelector('#text');
btn.addEventListener("click", () => {
    text.remove();
})

btn.addEventListener("click", () => alert("1"));
btn.removeEventListener("click", () => alert("1"));
btn.onclick = () => alert(2);

const messageInfo = [
    {
        from: "Azamat",
        received: "17:02",
        text: "Hello! How r u?",
    },
    {
        from: "Dalida",
        received: "19:07",
        text: "How ur study's going on?",
    },
    {
        from: "Yerkebulan",
        received: "20:34",
        text: "Let's have fun!",
    },
]

const messages = document.querySelector('#messages');
messageInfo.forEach(el => {
    let newEl = document.createElement("div");
    newEl.className = "message"
    newEl.append(`${el.from}, ${el.received} \n ${el.text}`);
    let close = document.createElement('button');
    close.className = "close";
    close.append("X");
    messages.append(newEl);
    newEl.append(close);
});

const closeBtns = document.querySelectorAll('.close');
closeBtns.forEach(el => {
    el.addEventListener("click", (event) => {
        event.target.parentNode.remove();
    })
})
