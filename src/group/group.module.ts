import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupSchema } from 'src/schema/group.schema';
import { GroupService } from './group.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Group', schema: GroupSchema}])],
  providers: [GroupService],
  exports: [GroupService]
})
export class GroupModule {}
