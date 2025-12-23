const PIN = "040404";

const inputs = document.querySelectorAll(".pin-input");
const error = document.getElementById("error");

inputs.forEach((input, index) => {

    input.addEventListener("input", () => {
        input.value = input.value.replace(/\D/g, '');
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
    const entered = Array.from(inputs).map(i => i.value).join('');
    if (entered.length === 6) {
        if (entered === PIN) unlock();
        else {
            error.textContent = "Almost… try again ❤️";
            inputs.forEach(i => i.value = "");
            inputs[0].focus();
        }
    }
}

/* Unlock */
function unlock() {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
    document.getElementById("music").play();
    typeText();
    initScratch();
}

/* Typing */
const text = `Hoo Ho Ho 🎅
Advance Merry Christmas
Dear Sujaya 💖`;

let i = 0;
function typeText() {
    if (i < text.length) {
        document.getElementById("typing").textContent += text[i++];
        setTimeout(typeText, 90);
    }
}

/* Scratch */
function initScratch() {
    const canvas = document.getElementById("scratch");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.fillStyle = "#bbb";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    function scratch(x, y) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, Math.PI * 2);
        ctx.fill();
    }

    let down = false;
    canvas.addEventListener("pointerdown", () => down = true);
    canvas.addEventListener("pointerup", () => down = false);
    canvas.addEventListener("pointermove", e => {
        if (!down) return;
        const r = canvas.getBoundingClientRect();
        scratch(e.clientX - r.left, e.clientY - r.top);
    });
}
