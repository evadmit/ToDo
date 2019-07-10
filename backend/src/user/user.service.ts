import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {User} from './interfaces/user.interface';
import {UserDto} from './models/user.dto';

@Injectable()
export class UserService {

constructor(@InjectModel('User')private readonly userModel:Model<User>) {}
   
async create(userDto: UserDto):Promise<User>{
        const createdUser = new this.userModel(userDto);
        return await createdUser.save();
    }

async findAll(): Promise<User[]>{
    return await this.userModel.findAll().exec();
}


async findOneByToken( token:string): Promise<User>
    {
return await this.userModel.findOneByToken().exec();
    }  
}
