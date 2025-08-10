const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

function getBotResponse(message) {
  message = message.toLowerCase();

  if (message.includes("course") || message.includes("raam academy")) {
    return "Raam Academy offers courses like AI/ML, Data Science, and Robotics.";
  }
  if (message.includes("ai") || message.includes("artificial intelligence")) {
    return "AI stands for Artificial Intelligence. It's one of the key courses we offer.";
  }
  if (message.includes("robotics")) {
    return "Robotics is a course that teaches automation, sensors, and intelligent machines.";
  }
  if (message.includes("data science")) {
    return "Data Science involves statistics, machine learning, and big data tools.";
  }
  if (message.includes("education") || message.includes("learning")) {
    return "Education is the foundation of our future. Ask me about courses or skills.";
  }

  return "That's an interesting question! sorry we will answer only about the education";
}
  function appendMessage(sender, text) {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function sendText() {
  const text = userInput.value.trim();
  if (!text) return;

  appendMessage("You", text);
  userInput.value = "";

  const botResponse = getBotResponse(text);
  appendMessage("Bot", botResponse);
  speak(botResponse);
}

function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    userInput.value = transcript;
    sendText();
  };

  recognition.start();
}

function speak(text) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.lang = "en-US";
  speech.pitch = 1;
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
}       