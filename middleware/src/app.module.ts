import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[
    ClientsModule.register([{
      name: "payment-service",
      transport: Transport.RMQ,
      options:{
        urls: ["amqp://localhost:5672"],
        queue: "payment-service",
      },
    },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
