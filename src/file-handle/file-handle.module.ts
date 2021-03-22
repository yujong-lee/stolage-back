import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { MulterModule } from '@nestjs/platform-express';
import { FileHandleController } from '../file-handle/file-handle.controller';
import { FileHandleService } from './file-handle.service';
import { FileSchema } from './schema/file.schema'

@Module({
    imports: [MongooseModule.forFeature([{name: 'File', schema: FileSchema}]), MulterModule.register({dest: './uploads'})],
    controllers: [FileHandleController],
    providers: [FileHandleService],
})
export class FileHandleModule {}
