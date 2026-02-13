
const texts = [
  'One of the first things I noticed about you is your hunger to learn and grow - especially in knowledge of the Bible and the Lord. Whether its your desire to go into deep studies, or pushing your students to learn and lead IBS’s, your passion for knowledge is so evident. Some of my best memories with you are are when we have deep random convos on spiritual topics, or share in excitement about something we learned in our weeks. The night after Friendsgiving and our time at the BTC when I met Malia are two that I remember were especially fun. ',
  'Your ability to easily find and bring joy in so many things is something that is truly special. When you walk into a gathering of people where you are present, the atmosphere is almost guaranteed to be joyous or uplifting. Having the ability to bring the love of Christ everywhere in joy is such an amazing skill and is something that isn’t very common or valued enough. Whether it has to do with the fact that you laugh easily, or your ability to bring light in the midst of darkness, I pray you always cherish joyous spirit.',
];

const titles = [
  'Hunger for Knowledge',
  'Childlike Joy',
]

function openMessage(key) {
  document.getElementById("overlay-text").textContent = texts[key];
  document.getElementById("title-text").textContent = titles[key];
  document.getElementById("overlay").classList.add("active");
}

function closeOverlay(event) {
  if (!event || event.target.id === "overlay") {
    document.getElementById("overlay").classList.remove("active");
  }
}

function showEnvelopes() {
  document.getElementById('envelopes').classList.remove('hidden');
  document.getElementById('tap-hint').classList.remove('hidden');
  document.getElementById('tap-hint').classList.add('tap-hint');
}

// typewriter text
function typeText(element, text) {
  element.textContent = "";
  element.classList.add("typewriter-cursor");

  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, 25);
    } else {
      element.classList.remove("typewriter-cursor");
      showEnvelopes();
    }
  }

  type();
}

function keyWatcher() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeOverlay();
    }
  });

  const content = document.getElementById('content');
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && content.classList.contains('hidden')) {
      password(); 
    }
  })
}

function password() {
  const input = document.getElementById("password");
  const container = document.getElementsByClassName('password-container');
  const content = document.getElementById('content');
  const helperText = document.getElementById('helper-text');

  const validAnswers = ['quesadillas', 'quesadilla', 'cheese quesadilla', 'a'];
  if (validAnswers.includes(input.value)) {
    container[0].classList.add('hidden');
    content.classList.remove('hidden');

    typeText(text, "Hi Trinidad :) In a normal scenario I would give you a handwritten note, but thats a bit difficult given the current situation and I hope the boys have planned a awesome day for the team! As the end of outreach nears, I wanted to share some things to encourage you - below are some notes on a few attributes that I admire about you.");
  } else {
    helperText.classList.remove('hidden');
  }
}

const text = document.getElementById('story-text');
keyWatcher();