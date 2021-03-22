import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { key } from '../config/dev';
import { MulterModule } from '@nestjs/platform-express';
import { FileHandleController } from '../file-handle/file-handle.controller';
import { FileHandleService } from './file-handle.service';

@Module({
    imports: [MongooseModule.forRoot(key), MulterModule.register({dest: './uploads'}), FileHandleModule],
    controllers: [FileHandleController],
    providers: [FileHandleService],
})
export class FileHandleModule {}
