const inputField = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

function sendMessage() {
  const messageText = inputField.value.trim();
  if (messageText === "") return;

  // Create user message
  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "sent");
  userMsg.textContent = messageText;
  chatBox.appendChild(userMsg);

  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear input
  inputField.value = "";

  // Simulate bot reply
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.classList.add("message", "received");
    const responses = [
      "That's interesting!",
      "Tell me more!",
      "Sounds good 😊",
      "Can you explain further?",
      "Haha, nice one 😄",
    ];
    botMsg.textContent = responses[Math.floor(Math.random() * responses.length)];
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}

// Allow Enter key to send message
inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
