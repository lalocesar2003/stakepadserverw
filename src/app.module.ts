import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { GlobalstakeModule } from './globalstake/globalstake.module';
import { PrivatelinkModule } from './privatelink/privatelink.module';
import { CompanyModule } from './company/company.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [AuthModule, UserModule, RoleModule, GlobalstakeModule, PrivatelinkModule, CompanyModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
