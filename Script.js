const selectedGradeText = document.getElementById("selectedGrade");
const gradeButtons = document.querySelectorAll(".grade-btn");
const chatbox = document.getElementById("chatbox");

let currentGrade = "";

gradeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentGrade = button.dataset.grade;
    selectedGradeText.textContent = "Selected Grade: " + currentGrade;

    addChatMessage("Jennifer", `Wonderful. I’m ready to help with ${currentGrade}. Ask me about math, reading, writing, science, history, or Bible.`);
  });
});

function addChatMessage(sender, message) {
  const entry = document.createElement("div");
  entry.className = "chat-entry";
  entry.textContent = `${sender}: ${message}`;
  chatbox.appendChild(entry);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim().toLowerCase();

  if (!message) return;

  addChatMessage("You", input.value.trim());

  let response = "I’m here with you. Try asking about a subject, a grade, or say help.";

  if (message.includes("math")) {
    response = currentGrade
      ? `Let’s make math steady and simple for ${currentGrade} today. We can practice counting, addition, multiplication, fractions, or word problems.`
      : "Let’s make math steady and simple today. Pick a grade first and I’ll guide you better.";
  } else if (message.includes("reading")) {
    response = currentGrade
      ? `For ${currentGrade}, we can work on phonics, reading practice, comprehension, and vocabulary.`
      : "We can work on phonics, reading practice, and comprehension. Pick a grade and I’ll narrow it down.";
  } else if (message.includes("writing")) {
    response = "Writing grows best one small step at a time. We can practice sentences, spelling, copywork, or short stories.";
  } else if (message.includes("science")) {
    response = "Science can be hands-on and simple. We can explore nature, weather, plants, animals, and basic experiments.";
  } else if (message.includes("history")) {
    response = "History helps children understand people, places, courage, and mistakes from the past. We can build a gentle lesson from there.";
  } else if (message.includes("bible") || message.includes("faith")) {
    response = "Bible and character learning belong at the center. We can build lessons around scripture, wisdom, kindness, and family life.";
  } else if (message.includes("help")) {
    response = "I’m here with you. Choose a grade, then ask about a subject like math, reading, science, or Bible.";
  } else if (message.includes("grade")) {
    response = "Tap a grade button above, and I’ll tailor my guidance better.";
  }

  addChatMessage("Jennifer", response);
  input.value = "";
}

addChatMessage("Jennifer", "Welcome. Choose a grade to begin, then ask me a question.");
