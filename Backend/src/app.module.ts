import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { MessageModule } from './message/message.module';


@Module({
  imports: [MessageModule, LoginModule, SignupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
