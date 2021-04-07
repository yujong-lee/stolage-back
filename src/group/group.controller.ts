import { Controller, Get } from '@nestjs/common';
import { GroupService } from './group.service'

@Controller('group')
export class GroupController {
    constructor(private readonly GroupService: GroupService) {}

    @Get('/init')
    init() {
        this.GroupService.init();
        return {success: true}
    }
}
