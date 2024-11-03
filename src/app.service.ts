import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "esto es un get";
  }
  postHello(): string {
    return 'esto es un post!';
  }
  putHello(): string {
    return "esto es un put";
  }



}
