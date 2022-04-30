import { Controller, Get } from '@nestjs/common';

@Controller()
export class VersionController {
    @Get('version')
    findAll(): string {
        return process.env.npm_package_version;
    }
}
