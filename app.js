const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const search = ["ok sir", "ok, just a second sir", "ok, you got it"];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognation = new SpeechRecognition();

recognation.onstart = function() {
  console.log("voice is activated, you can talk to microphone");
};

recognation.onresult = function(event) {
  console.log(event);
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = `You Said: ${transcript}`;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognation.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "i'm sorry sir, I didn't understand what you said";

  if (message.includes("search in Google about")) {
    const finalText = search[Math.floor(Math.random() * search.length)];
    speech.text = finalText;
    let startPoint = message.indexOf("about");
    let searchGoogle = message.slice(startPoint + 6);
    window.open(`https://www.google.com/search?q=${searchGoogle}`);
  }

  if (message.includes("search in YouTube about")) {
    const finalText = search[Math.floor(Math.random() * search.length)];
    speech.text = finalText;
    let startPoint = message.indexOf("about");
    let searchYoutube = message.slice(startPoint + 6);

    window.open(
      `https://www.youtube.com/results?search_query=${searchYoutube}`
    );
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

//https://www.google.com/search?q=javascript&oq=javascript&aqs=chrome..69i57j0j35i39l2j0j69i61l2j69i60.3744j0j7&sourceid=chrome&ie=UTF-8
