const allFieldCards = document.querySelectorAll('.field-card');
const allSkillCards = document.querySelectorAll('.skill-card');
const skillCardContainer = document.getElementById('skill-card-container');

const scrollToTopBtn = document.getElementById('scrollToTop');
const scrollSign = document.getElementById('scroll-sign');

/////////////////////////////////////////////////////////////////////////On Load

// logData();
showAllPopups();

window.addEventListener('scroll', () => {
  const documentTop = document.documentElement.scrollTop + 5;
  const bodyTop = document.body.scrollTop + 5;

  //Updating the scroll sign visibility.
  if (documentTop > 5) scrollSign.style.opacity = '0';
  else scrollSign.style.opacity = '1';

  //Refreshing the display of the skill cards.
  const delayDifference = 0.8;
  allSkillCards.forEach((card, index) => {
    if (documentTop > card.offsetTop || bodyTop > card.offsetTop) {
      // card.style.transitionDelay = `${(index + 1) * delayDifference}s`;
      card.classList.add('slideUp');
    } else {
      card.classList.remove('slideUp');
    }
  });

  //Refreshing the display of the field cards
  allFieldCards.forEach((card) => {
    if (documentTop > card.offsetTop || bodyTop > card.offsetTop) {
      card.classList.add('slideUp');
    } else {
      card.classList.remove('slideUp');
    }
  });
});

scrollToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

/////////////////////////////////////////////////////////////////////////Helper Functions

function showAllPopups() {
  const allPopups = document.querySelectorAll('.popup-element');

  const delayDifference = 0.5;
  allPopups.forEach((popup, index) => {
    popup.style.transitionDelay = `${(index + 1) * delayDifference}s`;
    popup.classList.add('pop');
  });
}

// function logData() {
//   fetch('dist\\data\\projects.json')
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }
