const WebSocket = require('ws');

function setupWebSocketServer(server) {
    // Create a WebSocket server instance by passing the HTTP server instance
    const wss = new WebSocket.Server({ server });

    // Store connected clients
    const clients = new Set();

    // WebSocket server event listeners
    wss.on('connection', (ws) => {
        // Add the new client to the set
        clients.add(ws);

        // Event listener for messages from clients
        ws.on('message', (message) => {
            // Broadcast the received message to all connected clients
            broadcast(message);
        });

        // Event listener for client disconnection
        ws.on('close', () => {
            // Remove the client from the set upon disconnection
            clients.delete(ws);
        });
    });

    // Function to broadcast messages to all connected clients
    function broadcast(message) {
        clients.forEach(client => {
            // Check if the client connection is still open before sending the message
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    }
}

module.exports = setupWebSocketServer;
