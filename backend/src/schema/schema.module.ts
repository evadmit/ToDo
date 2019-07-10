import { Module } from '@nestjs/common';
import {UserSchema} from './user.schema';
import {TodoSchema} from './todo.schema';
import { from } from 'rxjs';
@Module({
imports:[UserSchema,TodoSchema],
exports:[UserSchema,TodoSchema],

})
export class SchemaModule {}
