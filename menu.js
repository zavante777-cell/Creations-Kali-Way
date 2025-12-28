// menu.js - Should be something like this
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
    
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function() {
            menu.classList.toggle('show');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
                menu.classList.remove('show');
            }
        });
    }
});
// Gallery image changer
const images = [
  "Pictures/Archive-9493/IMG_20251219_005205_01.jpg",
  "Pictures/Archive-9493/IMG_20251219_005201_01.jpg",
  "Pictures/Archive-9493/IMG_20251219_005218_01.jpg",
  "Pictures/Archive-9493/IMG_20251219_005227_01.jpg"
];

let currentIndex = 0;

function changeImageByIndex(index) {
  currentIndex = index;
  document.getElementById('mainImage').src = images[index];
  updateThumbnails();
}

function changeImageByDirection(direction) {
  currentIndex += direction;
  
  // Loop around
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  
  document.getElementById('mainImage').src = images[currentIndex];
  updateThumbnails();
}

function updateThumbnails() {
  const thumbs = document.querySelectorAll('.thumbnails img');
  thumbs.forEach((thumb, index) => {
    if (index === currentIndex) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');
    }
  });
}

// Set initial active thumbnail
updateThumbnails();