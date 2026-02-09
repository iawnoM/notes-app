
const texts = [
  'This is the first messag',
  'One of my favorite things about you is your hunger to learn and grow - especially in your knowledge of the Bible and the Lord. Whether its your desire to go into deep studies, or pushing your students to learn and lead IBS’s, your passion for knowledge is so evident. Some of my best memories with you are are when we have deep random convos on spiritual topics, or share in excitement about something we learned in our weeks. The night after Friendsgiving and our time at the BTC when I met Malia are two that I remember were especially fun. ',
  'Everything for your glory',
]

function openMessage(key) {
  document.getElementById("overlay-text").textContent = texts[key];
  document.getElementById("overlay").classList.add("active");
  
}

function closeOverlay(event) {
  if (!event || event.target.id === "overlay") {
    document.getElementById("overlay").classList.remove("active");
  }
}

// typewriter text
function typeText(element, text, speed = 50) {
  element.textContent = "";
  element.classList.add("typewriter-cursor");

  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      element.classList.remove("typewriter-cursor");
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
}

const text = document.getElementById('story-text');
typeText(text, "This is a text version of text");
keyWatcher();