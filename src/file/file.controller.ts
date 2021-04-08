import { Body, Controller, Get, Post } from '@nestjs/common';
import { FileService } from './file.service';
import { TagService } from 'src/tag/tag.service';

@Controller('file')
export class FileController {
    constructor(private readonly FileService: FileService,
        private readonly TagService: TagService) {}
    
    @Get('/init')
    init() {
        this.FileService.init();
        return {success: true}
    }

    @Post('/search')
    searchByTags(@Body('selected') selectedTags: string[]) {
        return this.FileService.searchByTag(selectedTags)
    }
}
