import { Controller, Get } from '@nestjs/common';
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
}
