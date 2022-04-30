import { Module } from '@nestjs/common';
import { GameModule } from '../game/game.module';
import { VersionController } from './version.controller';
import { WsModule } from '../ws/ws.module';
import { HealthController } from './health.controller';

@Module({
  imports: [
    WsModule,
    GameModule,
  ],
  controllers: [
    VersionController,
    HealthController,
  ],
})
export class AppModule {}
