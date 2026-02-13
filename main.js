
const texts = [
  'One of the first things I noticed about you is your hunger to learn and grow - especially in knowledge of the Bible and the Lord. Whether its your desire to go into deep studies, or pushing your students to learn and lead IBS’s, your passion for knowledge is so evident. Some of my best memories with you are are when we have deep random convos on spiritual topics, or share in excitement about something we learned in our weeks. The night after Friendsgiving and our time at the BTC when I met Malia are two that I remember were especially fun. ',
  'Your ability to easily find and bring joy in so many things is something that is truly special. When you walk into a gathering of people where you are present, the atmosphere is almost guaranteed to be joyous or uplifting. Having the ability to bring the love of Christ everywhere in joy is such an amazing skill and is something that isn’t very common or valued enough. Whether it has to do with the fact that you laugh easily, or your ability to bring light to any situatios, I pray you always cherish your joyous spirit.',
];

const titles = [
  'Hunger for Knowledge',
  'Childlike Joy',
]

function openMessage(key) {
  if (content.classList.contains('visible')) {
    document.getElementById("overlay-text").textContent = texts[key];
    document.getElementById("title-text").textContent = titles[key];
    document.getElementById("overlay").classList.add("active");
  }
}

function closeOverlay(event) {
  const content = document.getElementById('content');
  if (!event || event.target.id === "overlay") {
    document.getElementById("overlay").classList.remove("active");
  }
}

function keyWatcher() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeOverlay();
    }
  });

  const content = document.getElementById('content');
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !content.classList.contains('visible')) {
      password(); 
    }
  })
}

function password() {
  const input = document.getElementById("password");
  const container = document.getElementsByClassName('password-container');
  const content = document.getElementById('content');
  const helperText = document.getElementById('helper-text');

  const passwords = ['quesadillas', 'quesadilla', 'cheese quesadilla', 'cheese quesadillas', 'anya'];
  for (const answer of passwords) {
    if (input.value.toLowerCase() === answer) {
      container[0].classList.add('hidden');
      content.classList.add('visible');
      content.classList.remove('hidden')
      text.textContent =  "Hi Trinidad :) In a normal scenario I would give you a handwritten note, but thats a bit difficult given the current situation so I hope this will suffice. As the end of outreach nears, I wanted to share some encouragements with you - below are some notes on a few attributes that I admire about you. ";
    } else {
      helperText.classList.remove('hidden');
    }
  }
}

const text = document.getElementById('story-text');
keyWatcher();