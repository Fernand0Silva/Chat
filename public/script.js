const botaoEnviar = document.getElementById('enviar');//document.getElementById, recupere um elemento apartir do seu id no caso('enviar')
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();// código do meu front-end

botaoEnviar.addEventListener('click', () => {
    if (caixaMensagem.value !== "") {
        socket.emit('mensagem',caixaMensagem.value);
        caixaMensagem.value = "";
    }
})

socket.addEventListener('nova mensagem', (mensg) => {
    const elementoMensagem = document.createElement('li') // <li></li>
    elementoMensagem.textContent = mensg; //<li> ola </li>
    elementoMensagem.classList.add('mensagem'); //<li class='mensagem>ola</li>
    chat.appendChild(elementoMensagem);//<li id = 'mensagem' class='mensagem'>ola</li>
})