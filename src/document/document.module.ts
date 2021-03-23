import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DocumentSchema } from 'src/schema/document.schema';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';
import { TagModule } from 'src/tag/tag.module';

@Module({
  imports: [
            MongooseModule.forFeature([{name: 'Document', schema: DocumentSchema}]), 
            TagModule
          ],
  controllers: [DocumentController],
  providers: [DocumentService]
})
export class DocumentModule {}
