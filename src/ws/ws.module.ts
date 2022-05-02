import { Module } from '@nestjs/common';
import { GameModule } from '../game/game.module';
import { WsGateway } from './ws.gateway';

@Module({
    imports: [GameModule],
    providers: [WsGateway],
})
export class WsModule {}
