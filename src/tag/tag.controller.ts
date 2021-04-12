import { Body, Controller, Post } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
    constructor(private readonly TagService: TagService) {}
    @Post('/init')
    deleteTag(@Body('tags') tags: any) {
        this.TagService.init(tags);
        return {success: true}
    }

    @Post('/search')
    async searchByGroup(@Body('selected') selected: string[]) {
        const ret = await this.TagService.searchByGroup(selected)
        return ret
    }

    @Post('/include')
    async isGroupInTag(@Body('tag') tag:string, @Body('group') group:string) {
        const ret = await this.TagService.isGroupInTag(tag, group)
        return ret
    }

    @Post('/update')
    async update(@Body('from') from:string, @Body('to') to:string) {
        this.TagService.updateTag(from, to)
        return {success: true}
    }
}
