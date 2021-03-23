import { Injectable } from '@nestjs/common';
import { TagService } from 'src/tag/tag.service';

@Injectable()
export class AppService {
  constructor(private readonly TagService: TagService) {}

  giveTags() {
    return this.TagService.returnAll()
  }
}
