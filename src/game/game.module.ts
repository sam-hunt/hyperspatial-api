import { Module } from '@nestjs/common';
import { GameServer } from './game-server';

@Module({
    providers: [
        {
            provide: GameServer,
            useValue: new GameServer(),
        },
    ],
    exports: [
        GameServer,
    ],
})
export class GameModule { }
