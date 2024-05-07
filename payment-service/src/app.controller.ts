import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern("send-msg-payment")
  handleMsgReceived(@Payload() msg: String){
    return this.appService.handleMsgReceived(msg);
  }

  @MessagePattern({cmd: "get-msg-by-index"})
  fetchMsgByIndex(@Payload() index: number){
    return this.appService.fetchMsgByIndex(index);
  }

  @MessagePattern({cmd: "get-all-msgs"})
  fetchAllMsgs(){
    return this.appService.fechAllMsgs();
  }

  @Post("update-delivery-method")
  updateDeliveryMethod(@Body() method: string){
    return this.appService.updateDeliveryMethod(method);
  }

  @Get("get-delivery-method")
  getDeliveryMethod(){
    return this.appService.getDeliveryMethod();
  }

}
