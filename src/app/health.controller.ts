import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {

  @Get('health')
  getHealth(): { ts: string } {
    return { ts: new Date().toISOString() };
  }
}
