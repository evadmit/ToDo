import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {TodoItemDto} from './models/todo-item.dto';
import { TodoItem } from './interfaces/todo-item.interface';

@Injectable()
export class TodoService {

constructor(@InjectModel('TodoItem')private readonly todoItemModel:Model<TodoItem>) {
}
async create(todoItemDto:TodoItemDto): Promise<TodoItem>{
    const createdTodo = new this.todoItemModel(todoItemDto);
       return await createdTodo.save();
    }

    async findAll(): Promise<TodoItem[]>{
        return await this.todoItemModel.findAll().exec();
    }
    
}
