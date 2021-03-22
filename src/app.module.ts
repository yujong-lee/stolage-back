import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import key from './config/dev';
import { DocumentModule } from './document/document.module';
import { MulterModule } from '@nestjs/platform-express';
import { FileHandleModule } from './file-handle/file-handle.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [MongooseModule.forRoot(key), DocumentModule, MulterModule.register({dest: './uploads'}), FileHandleModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})  
export class AppModule {}
