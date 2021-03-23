import { Body, Controller, Post, Get } from '@nestjs/common';
import { TagService } from 'src/tag/tag.service';
import { DocumentService } from './document.service';

@Controller('demo')
export class DocumentController {
    constructor(private readonly documentService: DocumentService,
                private readonly tagService: TagService) {}

    @Get('/init')
    initTag() {
        this.documentService.initTag()
        return {success: true}
    }

    @Get('/data')
    allTag() {
        return this.tagService.allTags()
    }
    
    @Get('/update')
    updateTag() {
        this.documentService.updateTag()
        return {success: true}
    }

    @Post('/search')
    searchTag(@Body('selected') selected: string[]) {
        return this.documentService.searchTag(selected)
    }
}
