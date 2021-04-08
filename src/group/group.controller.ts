import { Body, Controller, Get, Post } from '@nestjs/common';
import { GroupService } from './group.service'

@Controller('group')
export class GroupController {
    constructor(private readonly GroupService: GroupService) {}

    @Get('/init')
    init() {
        this.GroupService.init();
        return {success: true}
    }

    @Get('/all')
    allGroup() {
        return this.GroupService.AllGroupName()
    }

    @Post('/update')
    async update(@Body('from') from:string, @Body('to') to:string) {
        this.GroupService.updateGroup(from, to)
        return {success: true}
    }
}
