import { Body, Controller, Get, Post, Query} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("send-msg-payment")
  sendMsgToPaymentService(@Body() msg: String) {
    return this.appService.sendMsgToPaymentService(msg);
  }

  @Get("get-msg-by-index")
  getMsgByIndex(@Body() index:Number){
    return this.appService.getMsg(index);
  }

  @Get("get-all-msgs")
  getAllMsg(){
    return this.appService.getAllMsgs();
  }

  @Get("search")
  search(@Query('query') query:String){
    return this.appService.search(query);
  }

  @Post("apply-coupon")
  applyCoupon(@Body() coupon:String){
    return this.appService.applyCoupon(coupon);
  }


}