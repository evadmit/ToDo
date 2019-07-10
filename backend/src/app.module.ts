import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TodoModule, UserModule,MongooseModule.forRoot('mongodb://localhost/todo'), MongooseModule]
})
export class AppModule {}
