import { User } from './../user.model';
import { Args, Mutation, Query, Resolver, ID } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserDto, UpdateUserDto } from '../userDto';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) { }
  // get all users
  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  // create  a new user
  @Mutation(() => User, {})
  async createUser(@Args('createUserInput') userInput: UserDto): Promise<User> {
    return this.usersService.addUser(userInput);
  }
  // update user
  @Mutation(() => Boolean, {})
  async updateUser(@Args('updateUserInput') userInput: UpdateUserDto): Promise<Boolean> {
    return this.usersService.updateUser(userInput)
  }

  // delete user 
  @Mutation(() => Boolean, {})
  async deleteUser(@Args('deleteUserInput') id: string): Promise<Boolean> {
    return this.usersService.deleteUser(id);
  }

  // get user by ID
  @Query(() => User)
  async getUserById(@Args('id') id: string): Promise<User> {
    return this.usersService.getUsersById(id);
  }

  @Mutation(() => String)
  async createPost() {
    return this.usersService.createPost();
  }
}
