import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Itag } from 'src/schema/tag.schema';

@Injectable()
export class TagService {
    constructor(@InjectModel('Tag') private TagModel: Model<Itag>) {}
    

    async allDoc() {
        const tags = await this.TagModel.find({}).exec()
        return tags
    }

    
}
