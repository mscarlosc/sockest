//

var socket = io();

// Escuchar sucesos del servidor
socket.on('connect', function() {
    
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    
    console.log('perdimos conexion con el servidor');
});


//  Enviar informacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'Carlos SC',
    mensaje: 'Hola mundo'
}, function( resp ) {
    
    console.log('Respuesta server : ', resp);
});


//  Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    
    console.log('Servidor : ', mensaje);
});

