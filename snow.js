// ❄️ Full Page Random Snowfall Effect

const snowContainer = document.createElement("div");
snowContainer.style.position = "fixed";
snowContainer.style.top = "0";
snowContainer.style.left = "0";
snowContainer.style.width = "100%";
snowContainer.style.height = "100%";
snowContainer.style.pointerEvents = "none";
snowContainer.style.zIndex = "9999";
document.body.appendChild(snowContainer);

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.innerText = "❄";

    const size = Math.random() * 10 + 10;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 5;
    const opacity = Math.random();

    snowflake.style.position = "absolute";
    snowflake.style.left = startX + "px";
    snowflake.style.top = "-20px";
    snowflake.style.fontSize = size + "px";
    snowflake.style.opacity = opacity;
    snowflake.style.color = "white";
    snowflake.style.userSelect = "none";

    snowflake.animate([
        { transform: `translateY(0px)` },
                      { transform: `translateY(${window.innerHeight + 50}px)` }
    ], {
        duration: duration * 1000,
        easing: "linear"
    });

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// Create snow continuously
setInterval(createSnowflake, 150);
