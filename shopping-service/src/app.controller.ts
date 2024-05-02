import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('apply-coupon')
  async applyCoupon(@Body('code') code: string, @Body('price') price: number): Promise<number> {
    return this.appService.applyCoupon(code, price);
  }
}
