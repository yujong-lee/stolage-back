import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GroupService } from 'src/group/group.service';
import { Itag } from 'src/schema/tag.schema';
import InputType from 'src/entity/groupTestInput'

@Injectable()
export class TagService {
    constructor(@InjectModel('Tag') private TagModel: Model<Itag>,
    private readonly GroupService: GroupService) {}
    
    async allTagNames() {
        const tags = await this.TagModel.find({}).exec()
        return tags.map((tag) => tag.name)
    }

    async findOneTagId(tagName: string) {
        const tag = await this.TagModel.findOne({name: tagName}).exec()
        return tag._id
    }

    async init(tags: InputType) {
        for (const tag in tags) {
            const groups = await this.GroupService.findOneGroupId(tags[tag])
            const newTag = new this.TagModel({
                name: tag,
                groups: groups
            })
            newTag.save()
        }
    } 
}
