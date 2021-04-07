import { Body, Controller, Post } from '@nestjs/common';
import { TagService } from './tag.service';
import InputType from 'src/entity/groupTestInput'

@Controller('tag')
export class TagController {
    constructor(private readonly TagService: TagService) {}
    @Post('/init')
    deleteTag(@Body('tags') tags: any) {
        this.TagService.init(tags);
        return {success: true}
    }
}
