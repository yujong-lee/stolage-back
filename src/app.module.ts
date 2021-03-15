import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { key } from './config/dev';
import { DocumentModule } from './document/document.module';

@Module({
  imports: [MongooseModule.forRoot(key), DocumentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
