import {Connection}  from 'mongoose';
import {TodoSchema} from  '../schema/todo.schema';
import {Constants} from '../shared/constants';

export const todoProviders=[
    {
        provide:Constants.TODO_MODEL,
        useFactory:(connection:Connection)=> connection.model('Todo',TodoSchema),
        inject: [Constants.DATABASE_CONNECTION],
    },
];