import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentType } from '../entity/document.entity';


@Controller('document')
export class DocumentController {
    constructor(private readonly documentService: DocumentService) {}
    
    @Post('/create')
    create(@Body() documentData: DocumentType) {
        this.documentService.create(documentData)
    }

    @Get(':id')
    async findAll(@Param('id') id: string) {
        let result = {}

        await this.documentService.findAll(id).then(function(docs) {
            if (docs.length === 0) {
                result = {message: "No document matched"}
            }
            else result = {message: "success", data: docs}
        }); 
        
        return result
    }
}
