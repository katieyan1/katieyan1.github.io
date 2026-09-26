const colors = ["#E81CFF", "#fff49f", "#FF1B6B"];

document.addEventListener("mousemove", function (e) {
    const trail = document.createElement("div");
    trail.className = "trail";
    trail.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    const spread = 20;
    trail.style.left = `${e.clientX + (Math.random() - 0.5) * spread}px`;
    trail.style.top = `${e.clientY + (Math.random() - 0.5) * spread}px`;
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 800);
})