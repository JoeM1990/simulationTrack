const socket = new WebSocket('wss://simulationtrack.onrender.com/'); 

document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const lampStatuses = document.querySelectorAll('.lamp-status');

    // Page de contrôle des lampes
    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const lamp = this.parentElement;
            const lampId = lamp.dataset.id;
            const isOn = lamp.classList.contains('on');

            const newState = !isOn;
            socket.send(JSON.stringify({ lampId, state: newState }));

            // Mettre à jour localement sans attendre la réponse
            lamp.classList.toggle('on', newState);
            lamp.classList.toggle('off', !newState);
            this.classList.toggle('on', newState);
            this.classList.toggle('off', !newState);
            this.textContent = newState ? 'Éteindre' : 'Allumer';
        });
    });

    // Page d'état visuel des lampes
    if (lampStatuses.length > 0) {
        socket.onmessage = function (event) {
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
