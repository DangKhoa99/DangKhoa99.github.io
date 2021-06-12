const images = document.querySelectorAll('.image');

images.forEach(function(image) {
    image.addEventListener("click", () => {
        removeActiveImage();
        image.classList.add('active');
    })
})

function removeActiveImage() {
    images.forEach(function(image) {
        image.classList.remove('active');
    })
}