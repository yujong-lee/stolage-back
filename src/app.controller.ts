import { Controller, Get, Post, Body, Header, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.giveTags();
  }

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  saveFile(@UploadedFile() file) {
    console.log(file)
  }

}
