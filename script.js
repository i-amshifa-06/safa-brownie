// script.js
const API_URL = 'https://safa-brownie.onrender.com/api/reviews';

// Submit Review
document.getElementById('review-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const reviewData = {
        name: document.getElementById('name').value,
        feedback: document.getElementById('feedback').value,
        rating: currentRating
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        });

        if (response.ok) {
            fetchReviews(); // Refresh reviews
            document.getElementById('review-form').reset();
            rate(0); // Reset rating
        }
    } catch (error) {
        console.error('Error submitting review:', error);
    }
});