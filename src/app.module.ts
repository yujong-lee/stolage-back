import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { key } from './config/dev';
import { DocumentModule } from './document/document.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [MongooseModule.forRoot(key), DocumentModule, MulterModule.register({dest: './uploads'})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
