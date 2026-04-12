document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chatbox");
  const input = document.getElementById("input");
  const sendButton = document.getElementById("sendBtn");

  if (!chatBox || !input || !sendButton) return;

  const savedChat = localStorage.getItem("hawthorne_chat");
  if (savedChat) {
    chatBox.innerHTML = savedChat;
  } else {
    addMessage(
      "Mr. Hawthorne",
      "Good day, young scholar. Pray tell, what lesson troubles thee today?"
    );
  }

  sendButton.addEventListener("click", sendMessage);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const userText = input.value.trim();
    if (!userText) return;

    addMessage("You", userText);

    let response =
      "Capital question. Let us examine the matter with patience and good order.";

    const lower = userText.toLowerCase();

    if (
      lower.includes("don't understand") ||
      lower.includes("do not understand") ||
      lower.includes("confused") ||
      lower.includes("hard")
    ) {
      response =
        "Very good. When a scholar admits confusion, wisdom has already begun. Let me explain it another way: first, we take one small step, then the next, and we compare the examples plainly.";
      saveConfusion(userText);
    } else if (lower.includes("math")) {
      response =
        "Arithmetic is but orderly thinking with numbers. We shall solve it piece by piece, without haste.";
    } else if (lower.includes("reading")) {
      response =
        "Reading improves when we slow the eye, sound the word, and consider its meaning with care.";
    } else if (lower.includes("writing")) {
      response =
        "Writing grows strong when the thought is clear before the pen begins its labor.";
    } else if (lower.includes("computer") || lower.includes("tablet") || lower.includes("phone")) {
      response =
        "Ah, one of the modern marvels! Though such an invention would astonish my own century, we may still study it with reason, language, and order.";
    }

    addMessage("Mr. Hawthorne", response);
    input.value = "";
    persistChat();
  }

  function addMessage(sender, text) {
    const message = document.createElement("p");
    message.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
    persistChat();
  }

  function persistChat() {
    localStorage.setItem("hawthorne_chat", chatBox.innerHTML);
  }

  function saveConfusion(text) {
    const oldConfusions = JSON.parse(localStorage.getItem("hawthorne_confusions") || "[]");
    oldConfusions.push({
      message: text,
      time: new Date().toISOString()
    });
    localStorage.setItem("hawthorne_confusions", JSON.stringify(oldConfusions));
  }
});
