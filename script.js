document.body.style.opacity = 0;

window.onload = () => {
    document.body.animate(
        [
            { opacity: 0 },
            { opacity: 1 }
        ],
        {
            duration: 1500,
            fill: "forwards"
        }
    );
};
