import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema } from 'src/file-handle/schema/file.schema';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'demo', schema: FileSchema}])],
  controllers: [DocumentController],
  providers: [DocumentService]
})
export class DocumentModule {}
