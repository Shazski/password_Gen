import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return{ "message": `Hello sharoon`};
  }

  checkHealth(): object {
    return { "message": `server health is fine`}
  }
}
