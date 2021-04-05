import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Itag } from 'src/schema/tag.schema';

@Injectable()
export class TagService {
    constructor(@InjectModel('Tag') private TagModel: Model<Itag>) {}
    

    async allTagNames() {
        const tags = await this.TagModel.find({}).exec()
        return tags.map((tag) => tag.name)
    }

    async findOneTagId(tagName: string) {
        const tag = await this.TagModel.findOne({name: tagName}).exec()
        return tag._id
    }

    // init(tags: string[]) {
    //     for (const tag of tags) {
    //         let newTag = new this.TagModel({
    //             name: tag,
    //             groups: []
    //         })
    //         newTag.save()
    //     }
    // }
    
}
