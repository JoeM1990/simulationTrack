const WebSocket = require('ws');

const PORT = process.env.PORT || 8080;

const wss = new WebSocket.Server({ port: PORT });

let lampStates = {
    lamp1: false,
    lamp2: false,
    lamp3: false,
    lamp4: false,
    lamp5: false,
    lamp6: false,
};

console.log("Le serveur WebSocket est lancé et écoute sur le port 8080");

wss.on('connection', ws => {
    ws.on('message', message => {
        const data = JSON.parse(message);
        const { lampId, state } = data;

        // Mettre à jour l'état de la lampe
        lampStates[lampId] = state;

        // Envoyer l'état à tous les clients
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ lampId, state }));
            }
        });
    });
});
