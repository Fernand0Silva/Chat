const http = require('http');// o http ja vem no node js o express não ele é um recurso externo
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

//io.addListener('connection', (socket) => {
   // console.log('um usuário conectou');
   // socket.addListener('nova mensagem', (mensg) => {
        //io.emit('nova mensagem', mensg);
   // });
//});

io.on('connection', (socket) => {
    console.log('Um usuário conectou');

    socket.on('disconnect', () => {
        console.log('Um usuário desconectou');
    });

    socket.on('mensagem', (msg) => {
        console.log('Nova mensagem: ' + msg);
        io.emit('nova mensagem', msg);
    });
});

aplicacao.use(express.static('public'));

servidorHttp.listen(1000,'192.168.56.1');// para usar isoo no navegador é só colocar: 192.168.56.1:1000(essa é o endereço (ip )dessa  rede )