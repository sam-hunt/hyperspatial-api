import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { config } from 'dotenv';
import { WsAdapter } from '@nestjs/platform-ws';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  config();
  const port = parseInt(process.env.PORT || '3000', 10);
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new WsAdapter(app));

  await app.listen(port);
  new Logger('Main').log(`Hyperspatial API running on port ${port}`)
}
bootstrap();
