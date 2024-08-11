const express=require('express');
const app=express();
app.use(express.static(__dirname+'/public'));
const expressserver=app.listen(9000,()=>{
    console.log("Server listening at port 9000")
});
const socketio=require('socket.io');
const io=socketio(expressserver);

module.exports={
    app,
    io
}
