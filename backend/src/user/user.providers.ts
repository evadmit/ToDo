import {Connection}  from 'mongoose';
import {UserSchema} from  '../schema/user.schema';
import {Constants} from '../shared/constants';

export const userProviders=[
    {
        provide:Constants.USER_MODEL,
        useFactory:(connection:Connection)=> connection.model('User',UserSchema),
        inject: [Constants.DATABASE_CONNECTION],
    },
];