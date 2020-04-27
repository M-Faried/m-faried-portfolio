// const toggle = document.getElementById('toggle');

// // Toggle nav
// toggle.addEventListener('click', () => nav.classList.toggle('show-nav'));
const fieldCards = document.querySelectorAll('.field-card');

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 2000) {
    fieldCards.forEach((card) => card.classList.add('show'));
  }
});
