document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.falling-image-container');
    const imageUrl = 'assets/img/members/danse-baby.gif';
    const numImages = 20; // Number of falling images

    for (let i = 0; i < numImages; i++) {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.className = 'falling-image';
      img.style.left = `${Math.random() * 100}%`;
      img.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(img);
    }
  });