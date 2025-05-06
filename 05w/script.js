const links = document.querySelectorAll('.dropdown-item');
const cards = document.querySelectorAll('.card');

function filterProducts(category) {
    cards.forEach(card => {
        card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
    });
}

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const cat = this.getAttribute('data-category');
        filterProducts(cat);
    });
});

// Show all by default
filterProducts('all');