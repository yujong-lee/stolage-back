import { Body, Controller, Post, Get } from '@nestjs/common';
import { TagService } from 'src/tag/tag.service';
import { DocumentService } from './document.service';

@Controller('demo')
export class DocumentController {
    constructor(private readonly DocumentService: DocumentService,
                private readonly TagService: TagService) {}

    @Get('/init')
    initTag() {
        this.DocumentService.initTag()
        return {success: true}
    }

    @Get('/alltag')
    allTag() {
        return this.TagService.allTagNames()
    }

    @Get('/alltagwheninit')
    allTagWhenInit() {
        return this.DocumentService.alltagInDoc();
    }
    
    @Post('/update')
    updateTag(@Body('from') from:string, @Body('to') to:string) {
        this.DocumentService.updateTag(from, to)
        return {success: true}
    }

    @Post('/delete')
    deleteTag(@Body('tag') tag: string) {
        this.DocumentService.deleteTag(tag)
        return {success: true}
    }

    @Post('/search')
    searchTag(@Body('selected') selected: string[]) {
        return this.DocumentService.searchTag(selected)
    }
}
