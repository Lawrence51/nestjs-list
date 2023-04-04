import { Body, Controller, Post } from '@nestjs/common';

interface IResponse {
  code: number;
  msg: string;
  data?: any;
}

@Controller('dogs')
export class DogsController {
  @Post('userLogin')
  userLogin(
    @Body() user: { account: string; password: string },
  ): string | IResponse {
    if (user.account === 'admin' && user.password === '1') {
      return '登陆成功';
    } else {
      return {
        code: -1,
        msg: '登录失败',
      };
    }
  }
}
