import { Injectable } from '@nestjs/common';
import { TagService } from 'src/tag/tag.service';

@Injectable()
export class AppService {
  hello() {
    return 'helloWorld'
  }
}
