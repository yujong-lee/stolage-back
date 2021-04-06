import { Body, Controller, Post } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
    constructor(private readonly TagService: TagService) {}
    @Post('/init')
    deleteTag(@Body('tags') tags: string[]) {
        this.TagService.init(tags);
        return {success: true}
    }
}
