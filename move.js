const noButton = document.getElementById('noButton')
noButton.addEventListener('mouseover', () => {

    const posX = Math.random() * 900
    const posY = Math.random() * 800
    noButton.style.position = 'fixed';
    noButton.style.left = `${posX}px`;
    noButton.style.top = `${posY}px`;
    
});
