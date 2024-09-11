const socket = new WebSocket('ws://localhost:8080');

document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  const lampStatuses = document.querySelectorAll('.lamp-status');

  // Page de contrôle des lampes
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const lamp = this.parentElement;
      const lampId = lamp.dataset.id;
      const isOn = lamp.classList.contains('on');
      
      const newState = !isOn;
      socket.send(JSON.stringify({ lampId, state: newState }));
      
      // Mettre à jour localement sans attendre la réponse
      lamp.classList.toggle('on', newState);
      this.textContent = newState ? 'Éteindre' : 'Allumer';
    });
  });

  
});
