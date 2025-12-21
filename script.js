const PIN = "040404"; // CHANGE to her favorite 6-digit PIN ❤️

const inputs = document.querySelectorAll(".pin-input");
const error = document.getElementById("error");

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
        checkPin();
    });

    input.addEventListener("keydown", e => {
        if (e.key === "Backspace" && !input.value && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

function checkPin() {
    let enteredPin = "";
    inputs.forEach(i => enteredPin += i.value);

    if (enteredPin.length === 6) {
        if (enteredPin === PIN) {
            unlock();
        } else {
            error.innerText = "Almost… try again ❤️";
            inputs.forEach(i => i.value = "");
            inputs[0].focus();
        }
    }
}








function unlock() {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
    document.getElementById("music").play();
    typeText();
    initScratch();
}

/* Typing Effect */
// const text = "Dear Sujaya, this little Christmas surprise is for you ❤️";
// let i = 0;
//
// function typeText() {
//     if (i < text.length) {
//         document.getElementById("typing").innerText += text.charAt(i);
//         i++;
//         setTimeout(typeText, 80);
//     }
// }



/* Typing Effect */
const typingEl = document.getElementById("typing");

const text = `Hoo Ho Ho 🎅
Advance Marry Christmas
Dear Sujaya 💖`;

let i = 0;

function typeText() {
    if (i < text.length) {
        typingEl.textContent += text[i]; // preserves spaces & line breaks
        i++;
        setTimeout(typeText, 100);
    }
}










/* Scratch Card */
function initScratch() {
    const canvas = document.getElementById("scratch");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.fillStyle = "#bbb";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let down = false;

    function scratch(x, y) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, Math.PI * 2);
        ctx.fill();
    }

    canvas.addEventListener("mousedown", () => down = true);
    canvas.addEventListener("mouseup", () => down = false);
    canvas.addEventListener("mousemove", e => {
        if (!down) return;
        const r = canvas.getBoundingClientRect();
        scratch(e.clientX - r.left, e.clientY - r.top);
    });

    canvas.addEventListener("touchmove", e => {
        const r = canvas.getBoundingClientRect();
        const t = e.touches[0];
        scratch(t.clientX - r.left, t.clientY - r.top);
    });
}
canvas.addEventListener("touchstart", e => e.preventDefault(), { passive: false });
canvas.addEventListener("touchmove", e => e.preventDefault(), { passive: false });


// 🔒 Disable touch scrolling (mobile)
document.addEventListener(
    "touchmove",
    function (e) {
        e.preventDefault();
    },
    { passive: false }
);
