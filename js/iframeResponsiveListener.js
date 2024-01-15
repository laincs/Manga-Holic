window.addEventListener("message", function(event) {
    document.documentElement.style.setProperty('--height', event.data === "burger-menu-active" ? '85px' : '325px');
});