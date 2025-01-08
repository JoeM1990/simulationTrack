/**
 * @author Joe Monkila
 */

const socket = new WebSocket('ws://localhost:8080');

document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const lampStatuses = document.querySelectorAll('.lamp-status');

    // Page de contrôle des lampes (index.html)
    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const lamp = this.parentElement;
            const lampId = lamp.dataset.id;
            const isOn = lamp.classList.contains('on');

            const newState = !isOn;
            socket.send(JSON.stringify({ lampId, state: newState }));

            lamp.classList.toggle('on', newState);
            lamp.classList.toggle('off', !newState);
            this.classList.toggle('on', newState);
            this.classList.toggle('off', !newState);
            this.textContent = newState ? 'Éteindre' : 'Allumer';

            const lampLight = lamp.querySelector('.lamp-light');
            lampLight.classList.toggle('on', newState);
            lampLight.classList.toggle('off', !newState);

            if (newState) {
                lampLight.classList.add('blink');
            } else {
                lampLight.classList.remove('blink');
            }
        });
    });

    // Page d'état des lampes (status.html)
    if (lampStatuses.length > 0) {
        socket.onmessage = function (event) {
            const data = JSON.parse(event.data);
            const lampStatusElement = document.getElementById(`${data.lampId}-status`);

            //console.log(data);

            if (lampStatusElement) {
                const lampLight = lampStatusElement.querySelector('.lamp-light');
                lampStatusElement.classList.toggle('on', data.state);
                lampStatusElement.classList.toggle('off', !data.state);
                lampStatusElement.textContent = `Lampe ${data.lampId.replace('lamp', '')}: ${data.state ? 'Allumée' : 'Éteinte'}`;

                lampLight.classList.toggle('on', data.state);
                lampLight.classList.toggle('off', !data.state);

                if (data.state) {
                    lampLight.classList.add('blink');
                } else {
                    lampLight.classList.remove('blink');
                }
            }
        };
    }
});
