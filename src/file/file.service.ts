import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IFile } from 'src/schema/file.schema';
import { TagService } from 'src/tag/tag.service';
import { Model } from 'mongoose'
import { DocumentService } from 'src/document/document.service';


@Injectable()
export class FileService {
    constructor(@InjectModel('File') private FileModel: Model<IFile>, 
                private readonly TagService: TagService, 
                private readonly DocumentService:DocumentService ) {}
    
    async init() {
        const files = await this.DocumentService.allFile()
        for (const file of files) {
            const InewFile = {
                name: file.name,
                tags: []
            }
            for (const tag of file.tags) {
                InewFile.tags.push(await this.TagService.findOneTagId(tag))
            }
            console.log(InewFile)
            const newFile = new this.FileModel(InewFile)
            newFile.save()
        }
    }

    async searchByTag(selectedTag: string[]) {
        const selectedID = await this.TagService.findAllTagId(selectedTag)
        return this.FileModel.find({tags: {$all: selectedID}}).exec()
    }
}
