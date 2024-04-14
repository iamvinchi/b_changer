import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'password1@',
      username: 'admin',
      entities: [User],
      database: 'postgres',
      synchronize: true,
      logging: true,
    })
  ]
})
export class DBModule {}