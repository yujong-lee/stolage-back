import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Idocument, Document } from '../schema/document.schema'
import {DocumentType} from '../entity/document.entity';

@Injectable()
export class DocumentService {
    constructor(@InjectModel('Document') private DocumentModel: Model<Idocument>) {}
    create(documentData: DocumentType) {
        const newDocument = new this.DocumentModel({
            name: documentData.name,
            tags: documentData.tags,
        })
        newDocument.save()
        return 'OK'
    }

    async findAll(id: string): Promise<Idocument[]>{
        return this.DocumentModel.find({tags: {$elemMatch: {$eq: id}}}).exec()
    }
}
