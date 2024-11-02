import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserPartialDto } from './dto/update-user-partial.dto';
import { IUser } from './interfaces/user.interface';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUpdateUserPartial } from './interfaces/update-user-partial.interface';
import usersData from './constants/users-storage.json';

@Injectable()
export class UsersService {
  private users: IUser[] = usersData;
  getUserAndUpdate(id: number, updateBody: IUpdateUserPartial): IUser {
    const user = this.getUser(id);
    return this.updateUserPartial(user.id, updateBody)
  }

  //create user
  create(createUserDto: CreateUserDto): IUser {
    const newUser = { id: this.users.length + 1, ...createUserDto}
    this.users.push(newUser)
    return newUser;
  }

  //get all of users
  getUsers(): IUser[] {
    return this.users;
  }

  //get user by id
  getUser(id: number): IUser {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user
  }

  //get user by email
  getUserByEmail(email: string): IUser {
    return this.users.find((user) => user.email === email);
  }

  //update user by id
  updateUser(id: number, updateUserDto: UpdateUserDto): IUser {
    const userIndex = this.users.findIndex((user) => user.id === id);
    let user = this.users[userIndex]
    if (userIndex === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    if (updateUserDto.hasOwnProperty('id')) {
      throw new UnprocessableEntityException(
        'Updating the "id" field is not allowed',
      );
    }

    const updateUser = { ...user, ...updateUserDto }
    this.users[userIndex] = updateUser; 
    return this.users[userIndex];
  }

  //update partial user by id
  updateUserPartial(id: number, updateUserPartialDto: UpdateUserPartialDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    if (updateUserPartialDto.hasOwnProperty('id')) {
      throw new UnprocessableEntityException(
        'Updating the "id" field is not allowed',
      );
    }

    const updateUser = { ...this.users[userIndex], ...updateUserPartialDto }
    this.users[userIndex] = updateUser;
    return updateUser;
  }

  //delete user by id
  remove(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    this.users.splice(userIndex, 1);
    return `This action removes a #${id} user`;
  }
}
