const searchBox = document.getElementById('searchBox');
const cards = document.querySelectorAll('.card');

searchBox.addEventListener('input', () => {
  const term = searchBox.value.toLowerCase();
  cards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    card.style.display = title.includes(term) ? 'block' : 'none';
  });
});
