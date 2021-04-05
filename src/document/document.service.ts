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

    async updateTag(from: string, to: string) {
        const files = await this.DocumentModel.find({tags: {$elemMatch: {$eq: from}}}).exec()
        for(const file of files) {
            let oldTags = file.tags
            file.tags = oldTags.map(_ => _ == from ? to : _)
            file.save()
        }
    }

    async deleteTag(tag: string) {
        const files = await this.DocumentModel.find({tags: {$elemMatch: {$eq: tag}}}).exec()
        for(const file of files) {
            let oldTags = file.tags
            file.tags = oldTags.filter(_ => _!=tag)
            file.save()
        }
        return
    }

    async alltag() {
        const files = await this.DocumentModel.find({}).exec()
        let ret = []
        for(const file of files) {
            const tags = file.tags
            ret = [...new Set([...ret, ...tags])]
            //console.log(ret)
        }
        return ret
    }

    async allFile() {
        const files = await this.DocumentModel.find({}).exec()
        return files
    }
}
