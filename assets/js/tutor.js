
function send() {
let input = document.getElementById("input").value;
let chat = document.getElementById("chatbox");

let response = "Capital! Let us explore this further.";

if (input.includes("don't understand")) {
response = "Pray allow me to explain it differently, dear scholar.";
localStorage.setItem("confusion", input);
}

chat.innerHTML += "<p><b>You:</b> " + input + "</p>";
chat.innerHTML += "<p><b>Mr. Hawthorne:</b> " + response + "</p>";

localStorage.setItem("chat", chat.innerHTML);
}
