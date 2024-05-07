import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  msgs: String[]=[];
  deliveryMethod: string;

  handleMsgReceived(msg: String){
    console.log(`Incoming MSG: ${msg}`);
    this.msgs.push(msg);
  }

  fechAllMsgs(){
    return this.msgs;
  }

  fetchMsgByIndex(index: number){
    console.log(`Fetched MSG: ${this.msgs.at(index)}`);
    return this.msgs[index];
  }

  updateDeliveryMethod(method: string){
    this.deliveryMethod = method;
  }

  getDeliveryMethod(){
    return this.deliveryMethod;
  }
} 
