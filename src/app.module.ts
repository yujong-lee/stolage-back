import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { MongooseModule } from '@nestjs/mongoose'
import { key } from './config/dev';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentModule } from './document/document.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [MongooseModule.forRoot(key), 
            MulterModule.register({dest: './uploads'}), 
            DocumentModule,
            TagModule],
  controllers: [AppController],
  providers: [AppService],
})  
export class AppModule {}
