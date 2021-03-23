import { Controller, Get, Post, Body, Header, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { TagService } from './tag/tag.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
              private readonly tagService: TagService) {}

  @Get()
  getHello() {
    return this.tagService.returnAll();
  }

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  saveFile(@UploadedFile() file) {
    console.log(file)
  }

}
