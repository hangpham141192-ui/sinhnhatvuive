const gift = document.getElementById("gift");
const home = document.getElementById("home");
const letter = document.getElementById("letter");
const cakePage = document.getElementById("cakePage");
const end = document.getElementById("end");

const typing = document.getElementById("typing");
const next = document.getElementById("next");
const blow = document.getElementById("blow");

const flame = document.getElementById("flame");

let message = `Chúc Quân một sinh nhật thật đặc biệt 💙

Chúc Quân luôn vui vẻ, mạnh khỏe và hạnh phúc.
Mong mọi điều tốt đẹp sẽ đến với Quân.
Mẹ khỏe ❤️ Con ngoan 👶
Gia đình luôn tràn ngập yêu thương.`;

let i = 0;

/* ========================= */
/* MỞ QUÀ */
/* ========================= */

gift.onclick = () => {
    home.classList.remove("active");
    letter.classList.add("active");
    startTyping();
    spawnPoodles();
};

/* ========================= */
/* NEXT LETTER → CAKE */
/* ========================= */

next.onclick = () => {
    letter.classList.remove("active");
    cakePage.classList.add("active");
};

/* ========================= */
/* THỔI NẾN */
/* ========================= */

blow.onclick = () => {
    flame.style.display = "none";
    cakePage.classList.remove("active");
    end.classList.add("active");
};

/* ========================= */
/* GÕ CHỮ */
/* ========================= */

function startTyping() {
    if (i < message.length) {
        typing.innerHTML += message.charAt(i);
        i++;
        setTimeout(startTyping, 25);
    }
}

/* ========================= */
/* POODLE RƠI (FIX 100%) */
/* ========================= */

function spawnPoodles() {
    setInterval(() => {

        const p = document.createElement("div");
        p.classList.add("poodle");

        // dùng emoji thay vì ảnh để chắc chắn chạy
        p.innerHTML = "🐩";

        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = (4 + Math.random() * 3) + "s";
        p.style.fontSize = (20 + Math.random() * 20) + "px";

        document.body.appendChild(p);

        setTimeout(() => {
            p.remove();
        }, 8000);

    }, 250);
}
