import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Idocument } from '../schema/document.schema'
import { TagService } from 'src/tag/tag.service';
import * as fs from 'fs'

@Injectable()
export class DocumentService {
    constructor(@InjectModel('Document') private DocumentModel: Model<Idocument>, 
                private readonly TagService: TagService) {}

    searchTag(selected: string[]) {
        return this.DocumentModel.find({tags: {$all: selected}}).exec()
    }

    initTag() {
        const regex = /(\d{4})(\d{2})(\d{2})-(\d)/
        const path = '../etc/testData'
        
        const tagHelper = (filename: string, regex: RegExp): string[] => {
            const match = filename.match(regex)
            const ret: string[] = []

            if(match !== null) {
                ret.push(Number(match[1]) + '년')
                ret.push(Number(match[2]) + '월')
                ret.push('문항: ' + Number(match[3]) + '번')
                ret.push('정답: ' + Number(match[4]) + '번')
            }
            return ret
        }

        fs.readdir(path, (err, files) => {
            files.forEach(file => {
                const newDocument = new this.DocumentModel({
                    name: file,
                    tags: tagHelper(file, regex),
                })
                newDocument.save()
            });
        });
    }

    async updateTag() {
        const files = await this.DocumentModel.find({}).exec()
        //console.time('update')
        for(const file of files) {
            const tags = file.tags

            let i = 0;
            for (const tag of tags) {
                await this.TagService.update(tag, tags, i)
                i += 1
            }
        }
        //console.timeEnd('update')
    }
}
