import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserPartialDto } from './dto/update-user-partial.dto';
import { IUser } from './interfaces/user.interface';
import { UpdateUserDto } from './dto/update-user.dto';

let users = []

@Injectable()
export class UsersService {

  //create user
  create(createUserDto: CreateUserDto): IUser {
    const newUser = { id: users.length + 1, ...createUserDto}
    users.push(newUser)
    return newUser;
  }

  //get all of users
  getUsers(): IUser[] {
    return users;
  }

  //get user by id
  getUser(id: number): IUser {
    const user = users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user
  }

  //update user by id
  updateUser(id: number, updateUserDto: UpdateUserDto): IUser {
    const userIndex = users.findIndex((user) => user.id === id);
    let user = users[userIndex]
    if (userIndex === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    if (updateUserDto.hasOwnProperty('id')) {
      throw new UnprocessableEntityException(
        'Updating the "id" field is not allowed',
      );
    }

    const updateUser = { ...user, ...updateUserDto }
    users[userIndex] = updateUser; 
    return users[userIndex];
  }

  //update partial user by id
  updateUserPartial(id: number, updateUserPartialDto: UpdateUserPartialDto) {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    if (updateUserPartialDto.hasOwnProperty('id')) {
      throw new UnprocessableEntityException(
        'Updating the "id" field is not allowed',
      );
    }

    const updateUser = { ...users[userIndex], ...updateUserPartialDto }
    users[userIndex] = updateUser;
    return updateUser;
  }

  //delete user by id
  remove(id: number) {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    users.splice(userIndex, 1);
    return `This action removes a #${id} user`;
  }
}
