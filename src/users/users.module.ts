import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserSchema} from '../user.model';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }])
  ],
  // controllers: [UsersResolver],
  providers: [UsersService,UsersResolver]
  
})
export class UsersModule {}
