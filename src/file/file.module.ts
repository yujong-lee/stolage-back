import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentModule } from 'src/document/document.module';
import { FileSchema } from 'src/schema/file.schema';
import { TagModule } from 'src/tag/tag.module';
import { FileController } from './file.controller';
import { FileService } from './file.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'File', schema: FileSchema}]), TagModule, DocumentModule],
    controllers: [FileController],
    providers: [FileService]
})
export class FileModule {}
