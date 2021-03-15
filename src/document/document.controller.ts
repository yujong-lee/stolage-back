import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentType } from '../entity/document.entity';
import { doc } from 'prettier';

@Controller('document')
export class DocumentController {
    constructor(private readonly documentService: DocumentService) {}
    
    @Post('/create')
    create(@Body() documentData: DocumentType) {
        this.documentService.create(documentData)
    }

    @Get(':id')
    findAll(@Param('id') id: string) {
        this.documentService.findAll(id).then(function(docs) {
            let result = ' '
            docs.forEach(element => {
                console.log(element.name)
            });
        }); 
    }
}
