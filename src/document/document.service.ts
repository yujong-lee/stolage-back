import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Idocument } from '../schema/document.schema'


@Injectable()
export class DocumentService {
    constructor(@InjectModel('Document') private DocumentModel: Model<Idocument>) {}
    create() {
        const newDocument = new this.DocumentModel({
            name: "test1",
            tags: ["tag1", 'tag2']
        })
        newDocument.save()
    }
}
