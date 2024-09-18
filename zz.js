const mainImageContainer = document.getElementById('main-image');
const galleryImages = document.querySelectorAll('.gallery img');
const overlay = document.querySelector('.overlay');
const toggleButton = document.getElementById('toggle-button');

galleryImages.forEach(img => {
    img.addEventListener('click', function () {
        mainImageContainer.querySelector('img').src = this.src;
        mainImageContainer.querySelector('img').alt = this.alt;
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';   
    });
});
 
toggleButton.addEventListener('click', () => {
    const btnClass = toggleButton.getAttribute('class');
    if (btnClass === 'dark') {
        toggleButton.setAttribute('class', 'light');
        toggleButton.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';  
    } else {
        toggleButton.setAttribute('class', 'dark');
        toggleButton.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';   
    }
});

