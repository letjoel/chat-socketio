const path = require('path');
const express = require('express');
const app = express();


//Settings
app.set('port', process.env.PORT || 3000);
console.log(process.env.PORT)

//Static files
app.use(express.static(path.join(__dirname,'client')));

//Server on
const server = app.listen(app.get('port'), ()=>{
    console.log('Server listening on ' + app.get('port'));
})

//Socket
const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', (socket) => {
    console.log("New connection");
    // socket.on('eventoChat', (msg)=>{
    //     console.log(msg);
    // })
    socket.on('eventChat', (msg) => {
        io.emit('eventChat', msg);
    })
});