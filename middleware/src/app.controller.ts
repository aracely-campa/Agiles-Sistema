import { Body, Controller, Get, Post } from '@nestjs/common';
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
}