import { Document } from 'mongoose';
 
export interface TodoItem extends Document{
 id:number;
 title: string;
 description: string;
 status: string;
}