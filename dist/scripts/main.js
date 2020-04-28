const allFieldCards = document.querySelectorAll('.field-card');

window.addEventListener('scroll', () => {
  const bodyTop = document.body.scrollTop + 5;
  const documentTop = document.documentElement.scrollTop + 5;

  allFieldCards.forEach((card) => {
    if (bodyTop > card.offsetTop || documentTop > card.offsetTop) {
      card.classList.add('slideUp');
    } else {
      card.classList.remove('slideUp');
    }
  });
});
