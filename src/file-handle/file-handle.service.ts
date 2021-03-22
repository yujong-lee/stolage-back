import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileType } from './entity/file.entity';
import { Ifile } from './schema/file.schema';

@Injectable()
export class FileHandleService {
    constructor(@InjectModel('File') private FileModel: Model<Ifile>) {}

    create(fileData: FileType) {
        const newFile = new this.FileModel({
            name: fileData.name,
            key: Buffer.from(fileData.name).toString('base64'),
            tags: fileData.tags
        })
        newFile.save()
    }
}
