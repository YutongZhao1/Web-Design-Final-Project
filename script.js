function setActiveNav() {
  const page  = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(function(link) {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });
}

/* FUN FACTS */
const NYC_FACTS = [
  "New York City has over 800 languages spoken within its borders — making it the most linguistically diverse city on Earth! 🌍",
  "The NYC subway system never closes. It runs 24 hours a day, 7 days a week, 365 days a year. 🚇",
  "Central Park was the first landscaped public park in the United States, opened in 1858. 🌳",
  "There are more than 26,000 restaurants in NYC — you could eat at a new one every day for over 71 years! 🍽️",
  "The Brooklyn Bridge, completed in 1883, was the longest suspension bridge in the world at the time. 🌉",
  "NYC's tap water is considered some of the finest in the world, piped from reservoirs up to 125 miles away. 💧",
  "Times Square got its name from The New York Times, which moved its headquarters there in 1904. 📰",
  "The High Line park was built on a disused elevated railway and stretches nearly 1.5 miles through Manhattan. 🌿",
  "NYU is one of the largest private universities in the US, with students from over 133 countries. 🎓",
  "New York City has 578 miles of waterfront — more than any other US city. 🌊",
  "Washington Square Park was originally a potter's field before becoming a public park in the 1820s. ⚔️",
  "The Statue of Liberty was a gift from France, dedicated on October 28, 1886. 🗽",
  "The Metropolitan Museum of Art holds over 2 million works spanning 5,000 years of history. 🎨",
  "There are more than 12,000 yellow taxis on New York City streets at any given time. 🚕",
  "Joe's Pizza on Carmine Street has been open since 1975 — just steps from NYU's campus. 🍕",
];

let lastFactIndex = -1;

function showFact() {
  const factDisplay = document.getElementById('fact-display');
  const factText    = document.getElementById('fact-text');
  const factCounter = document.getElementById('fact-counter');

  if (!factText) return;

  let idx;
  do {
    idx = Math.floor(Math.random() * NYC_FACTS.length);
  } while (idx === lastFactIndex && NYC_FACTS.length > 1);
  lastFactIndex = idx;


  factDisplay.style.opacity   = '0';
  factDisplay.style.transform = 'scale(0.97)';

  setTimeout(function() {
    factText.textContent    = NYC_FACTS[idx];
    factCounter.textContent = 'Fact ' + (idx + 1) + ' of ' + NYC_FACTS.length;
    factDisplay.style.transition = 'opacity .35s ease, transform .35s ease';
    factDisplay.style.opacity    = '1';
    factDisplay.style.transform  = 'scale(1)';
  }, 200);
}


document.addEventListener('DOMContentLoaded', function() {
  setActiveNav();

  const factBtn = document.getElementById('btn-fact');
  if (factBtn) {
    factBtn.addEventListener('click', showFact);
  }
});
