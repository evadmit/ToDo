import { Module } from '@nestjs/common';
import {UserController} from './user.controller'
import {UserService} from './user.service';
import { UserSchema } from '../schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

import {userProviders} from './user.providers';
import {DatabaseModule} from '../database/database.module';

@Module({
imports: [DatabaseModule, MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
controllers:[UserController],
providers:[UserService, ...userProviders],
exports:[UserService]
})
export class UserModule {}
