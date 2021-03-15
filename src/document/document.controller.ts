import { Body, Controller, Post, Get } from '@nestjs/common';
import { DocumentService } from './document.service';

@Controller('document')
export class DocumentController {
    constructor(private readonly documentService: DocumentService) {}
    
    @Get('/create')
    create(@Body() documentData) {
        this.documentService.create()
    }
}
