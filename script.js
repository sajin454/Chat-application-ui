const messagesContainer = document.getElementById('messages');
const inputField = document.getElementById('input');
const sendBtn = document.getElementById('sendBtn');

function addMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = text;
  messagesContainer.appendChild(msgDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
  const text = inputField.value.trim();
  if (!text) return;

  addMessage(text, 'me');
  inputField.value = '';

  setTimeout(() => {
    addMessage("Got it 👍 Let's continue!", 'bot');
  }, 1000);
}

sendBtn.addEventListener('click', sendMessage);
inputField.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendMessage();
});
