function changeImage(imageId, imagePath) {
  const mainImage = document.getElementById(imageId);
  mainImage.src = imagePath;
}

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.news-card-little-card-image');
  
  images.forEach(image => {
    image.addEventListener('click', function() {
      images.forEach(img => {
        img.classList.remove('default-border');
      });
      this.classList.add('default-border');
    });
  });
});