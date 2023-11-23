import { Injectable, OnModuleInit } from '@nestjs/common';
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { DisconnectReason } from 'socket.io/dist/socket';

type Message = {
    msg: string
}
// @Injectable()
@WebSocketGateway({
    cors:{
        origin: ['*']
    }
})
export class GateawayService implements OnModuleInit{
    @WebSocketServer()
    server: Server;
    onModuleInit() {
        this.server.on('connection',(socket:Socket) =>{
            console.log(socket.id);
            socket.on('disconnect', (reason: DisconnectReason) => {
                console.log(`client id ${socket.id} disconnected due to ${reason}`);
              });
        })
    }

    @SubscribeMessage('newMessage')
    onNewMessage(socket:Socket){
        socket.join('601')
    }
    
    @SubscribeMessage('sendMessage')
    onSendMessage(@MessageBody() body:Message){
       this.server.to('601').emit('onMessage',{
        msg: body.msg
       })
    }
}
