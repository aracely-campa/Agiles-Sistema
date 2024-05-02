import { Body, Inject, Injectable } from '@nestjs/common';
import { timeout } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(
    @Inject("payment-service") private rabbitClient: ClientProxy,
    @Inject("search-service") private searchRabbitClient:ClientProxy,
    @Inject("shopping-service") private shoppingRabbitClient:ClientProxy
  ) {}

  sendMsgToPaymentService(@Body() msg:String){
      this.rabbitClient.emit("send-msg-payment",msg);
      return "Msg sent";
    }

    getMsg(@Body() index:Number){
      return this.rabbitClient.send({cmd: "get-msg-by-index"}, index).pipe(timeout(5000));
    }

    getAllMsgs(){
      return this.rabbitClient.send({cmd: "get-all-msgs"},{}).pipe(timeout(5000));
    }

    search(@Body() query: String){
      return this.searchRabbitClient.send({cmd:"search"},query).pipe(timeout(5000));
    }

    applyCoupon(@Body() coupon: String){
      return this.shoppingRabbitClient.send({cmd:"apply-coupon"},coupon).pipe(timeout(5000));
    }
}
