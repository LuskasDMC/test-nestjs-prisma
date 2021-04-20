import { Module } from '@nestjs/common';
import { UsersModule } from 'src/user/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
