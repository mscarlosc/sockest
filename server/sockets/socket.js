//

const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'cliente',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {

        console.log('Usuario desconectado');
    });

    //  Escuchar cliente
    client.on('enviarMensaje', (data , callback) =>{

        console.log(data);

        client.emit('enviarMensaje', data);   // Se envia solo al usuario que envio el mensaje
        client.broadcast.emit('enviarMensaje', data);   // envia a todos los usuario el mensaje



        // if ( mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien...'
        //     });
        // } else {
        //     callback({
        //         resp: 'SALIO MAL !!!'
        //     });
        // }


    });

    
});
