const socket = new WebSocket('ws://localhost:8080');

document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  const lampStatuses = document.querySelectorAll('.lamp-status');

  

  // Page d'état visuel des lampes
  if (lampStatuses.length > 0) {
    socket.onmessage = function(event) {
      const data = JSON.parse(event.data);
      const lampStatusElement = document.getElementById(`${data.lampId}-status`);
      
      if (lampStatusElement) {
        lampStatusElement.classList.toggle('on', data.state);
        lampStatusElement.classList.toggle('off', !data.state);
        lampStatusElement.querySelector('.lamp-light').classList.toggle('on', data.state);
        lampStatusElement.querySelector('.lamp-light').classList.toggle('off', !data.state);
      }
    };
  }
});
