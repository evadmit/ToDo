import { Module } from '@nestjs/common';
import {TodoController} from './todo.controller';
import {TodoService} from './todo.service';
import { TodoSchema } from '../schema/todo.schema';
import { MongooseModule } from '@nestjs/mongoose';
import {todoProviders} from './todo.providers';
import {DatabaseModule} from '../database/database.module';

@Module({
imports: [DatabaseModule,MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])],
controllers:[TodoController],
providers:[TodoService,...todoProviders],
exports:[TodoService]
})
export class TodoModule {}
