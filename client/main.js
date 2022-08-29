const socket = io('ws://localhost:8080');

socket.on('message', (message) => {
    console.log('message emited');
    const newMessageHTMLElement = document.createElement('li');
    newMessageHTMLElement.innerHTML = message;
    document.querySelector('ul').appendChild(newMessageHTMLElement);
})


function sendMessage() {
    const inputElement = document.querySelector('input');

    const textOfMessage = inputElement.value;
    inputElement.value = '';


    socket.emit('message', textOfMessage);
}