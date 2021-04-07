import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupSchema } from 'src/schema/group.schema';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Group', schema: GroupSchema}])],
  providers: [GroupService],
  exports: [GroupService],
  controllers: [GroupController]
})
export class GroupModule {}
