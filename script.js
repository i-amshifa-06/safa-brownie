// script.js
const API_URL = 'https://safa-brownie.onrender.com/api/reviews';

// Submit Review
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;
    const rating = document.getElementById('rating').value;

    const review = document.createElement('div');
    review.className = 'review';
    review.innerHTML = 
    review.innerHTML = 
  <div>
    <strong>${name}</strong>
    <p>${feedback}</p>
    <div class="rating">${'⭐'.repeat(rating)}</div>
  </div>
;
    document.querySelector('.reviews-slider').appendChild(review);

    // Clear the form
    document.getElementById('review-form').reset();
});

// Auto-scroll reviews
function startAutoScroll() {
    const slider = document.querySelector('.reviews-slider');
    let scrollAmount = 0;
    const scrollSpeed = 1;

    setInterval(() => {
        if (slider.scrollWidth > slider.clientWidth) {
            scrollAmount += scrollSpeed;
            slider.scrollLeft = scrollAmount;

            if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
                scrollAmount = 0;
                slider.scrollLeft = 0;
            }
        }
    }, 20);
}

// Start auto-scroll when page loads
window.addEventListener('load', startAutoScroll);