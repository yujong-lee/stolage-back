import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
//import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { TagService } from './tag/tag.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  rootPage() {
    return 'This is root';
  }

  // @Post('file')
  // @UseInterceptors(FileInterceptor('file'))
  // saveFile(@UploadedFile() file) {
  //   console.log(file)
  // }

}
