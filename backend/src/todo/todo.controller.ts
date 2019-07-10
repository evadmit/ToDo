import { Controller, Get, Post, Body} from '@nestjs/common';
import { TodoItemDto } from './models/todo-item.dto';
import {TodoService} from './todo.service';
import {TodoItem} from './interfaces/todo-item.interface';

@Controller('todo')
export class TodoController {

constructor(private readonly toDoService:TodoService) {}

@Get()
async findAll(): Promise<TodoItem[]> {
 return  this.toDoService.findAll();
 }
 
 @Post()
 async create(@Body() todoitemDto:TodoItemDto) {
   this.toDoService.create(todoitemDto);
  }
}

