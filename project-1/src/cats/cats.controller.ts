import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get('getCats')
  getCats(@Query() query): string[] {
    const map = {
      1: ['Tom', 'Happy'],
      2: ['Tom', 'Happy', 'betty'],
    };
    return map[query.id];
  }
  @Post('find')
  findAll(@Req() request: Request): string {
    console.log('----------', request);
    return '主题';
  }
}
