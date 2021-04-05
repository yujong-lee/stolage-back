import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Igroup } from 'src/schema/group.schema';

@Injectable()
export class GroupService {
    constructor(@InjectModel('Group') private GroupModel: Model<Igroup>) {}

    
}
