import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Itag } from 'src/schema/tag.schema';

@Injectable()
export class TagService {
    constructor(@InjectModel('Tag') private TagModel: Model<Itag>) {}
    
    async update(tagName: string, selected: string[], i: number) {
        let tag = await this.TagModel.findOne({name: tagName}).exec()
        const rel = [...selected.slice(0, i), ...selected.slice(i + 1)]

        if(tag !== null) {
            const newRelated = [...new Set([...rel, ...tag.related])]
            tag.related = newRelated
            tag.save()
        }
        else {
            const newTag = new this.TagModel({
                name: tagName,
                related: rel
            })
            newTag.save()
        }
    }

    async allDoc() {
        const tags = await this.TagModel.find({}).exec()
        return tags
    }

    
}
