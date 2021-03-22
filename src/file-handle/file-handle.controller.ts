import { Body, Controller, Get, Post } from '@nestjs/common';
import { FileHandleService } from './file-handle.service'

@Controller('file-handle')
export class FileHandleController {
    constructor(private readonly fileService: FileHandleService) {}
    @Post('/files')
    getFiles(@Body('selected') selected: string[]) {
        return this.fileService.getFiles(selected)
    }
    

}
