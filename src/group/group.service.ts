import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Igroup } from 'src/schema/group.schema';

@Injectable()
export class GroupService {
    constructor(@InjectModel('Group') private GroupModel: Model<Igroup>) {}

    init() {
        const groups = ['시행연도', '시행월', '문항 번호', '정답', '짝수', '홀수', '평가원', '교육청']
        for (const group of groups) {
            const newGroup = new this.GroupModel({
                name: group,
            })
            newGroup.save()
        }
    }

    async findAllGroupId(groupNames: string[]) {
        const groups = await this.GroupModel
                                .find({"name": { $in: groupNames }} )
                                .exec()
        return groups.map(group => group._id)
    }
}
