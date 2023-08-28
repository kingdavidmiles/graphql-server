import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto, UserDto } from '../userDto';
import { User, UserDocument } from '../user.model';
import { error } from 'console';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}

  // create a new User object
  async addUser(userDto: UserDto): Promise<User> {
    const userExists = await this.userModel.findOne({
      name: userDto.name,
    });
    if (!userExists) {
      const newuser = await this.userModel.create(userDto);
      return newuser.save();
    } else {
      throw new Error(`User ${userDto.name} already exists`);
    }
  }

  // get all users
  async getUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  //   get a single user
  async getUsersById(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async updateUser(params: UpdateUserDto): Promise<Boolean> {
    const foundUser = await this.userModel.findById(params.id).exec();
    if (!foundUser) {
      throw new Error('user not found');
    }
    const updatedUser = await this.userModel.findByIdAndUpdate(params.id, {
      name: params.name,
      userName: params.userName,
      email: params.email,
    });
    console.log('updated user', updatedUser);
    console.log('updated params', params);
    return true;
  }

  async deleteUser(id: string): Promise<Boolean> {
    console.log(`Attempting to delete user with ID: ${id}`);
    const userToDelete = await this.userModel.findByIdAndDelete(id);

    if (userToDelete) {
      console.log('User deleted:', userToDelete);
    } else {
      console.log(`User with ID ${id} not found.`);
    }
    return true;
  }
  /**
   * creates a post
   */
  createPost(): string {
    return 'hello world' + 'test-now';
  }
}
