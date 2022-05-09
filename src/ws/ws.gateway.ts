import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server as WsServer, WebSocket } from 'ws';
import { GameServer } from '../game/game-server';

@WebSocketGateway({ path: '/ws' })
export class WsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    private wsServer: WsServer;

    public constructor(private readonly gameServer: GameServer) {}

    public afterInit(server: WsServer) {
        server;
        // TODO: Notify game server of readiness to receive connections
    }

    public handleConnection(client: WebSocket, ...args: any[]) {
        args;

        // TODO: Pass client details to game server
        // console.log(client, ...args);

        // TODO: Match clients against users so game server can address
        client.on('message', (data, isBinary) => {
            this.wsServer.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(data, { binary: isBinary });
                }
            });
        });
    }

    public handleDisconnect(client: unknown) {
        client;
        // TODO: Pass client details to game server
        // console.log(client);
    }
}
