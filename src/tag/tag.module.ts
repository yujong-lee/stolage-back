import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagService } from './tag.service';
import {TagSchema} from '../schema/tag.schema'

@Module({
  imports: [MongooseModule.forFeature([{name: 'Tag', schema: TagSchema}])],
  providers: [TagService],
  exports: [TagService]
})
export class TagModule {}
