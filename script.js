// Submit Review
document.getElementById('review-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://safa-brownie-backend.herokuapp.com/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: document.getElementById('name').value,
          feedback: document.getElementById('feedback').value,
          rating: currentRating
        }),
      });
  
      if (response.ok) {
        // Refresh reviews after submission
        fetchReviews();
        document.getElementById('review-form').reset();
        rate(0);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  });
  
  async function fetchReviews() {
    try {
        const reviews = await fetch('/api/reviews').then(response => response.json());

        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review';
            return (
                <div>
                  <strong>{name}</strong>
                  <p>{feedback}</p>
                  <div className="rating">{'⭐'.repeat(rating)}</div>
                </div>
              );
            // Assuming 'slider' is a valid DOM element where you want to append the reviews
            slider.appendChild(reviewElement);
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
}

// Initial fetch
fetchReviews();