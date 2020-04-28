const allFieldCards = document.querySelectorAll('.field-card');

showAllPopups();

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

function showAllPopups() {
  const allPopups = document.querySelectorAll('.popup-element');

  const delayDifference = 0.5;
  allPopups.forEach((popup, index) => {
    popup.style.transitionDelay = `${index * delayDifference}s`;
    popup.classList.add('pop');
  });
}
