import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagService } from './tag.service';
import {TagSchema} from '../schema/tag.schema'
import { TagController } from './tag.controller';
import { GroupModule } from 'src/group/group.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Tag', schema: TagSchema}]), GroupModule],
  controllers: [TagController],
  providers: [TagService],
  exports: [TagService],
})
export class TagModule {}
