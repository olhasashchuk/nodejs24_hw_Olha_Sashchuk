import { Controller, Get, Post, Body, Put, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserPartialDto } from './dto/update-user-partial.dto';
import { IUser } from './interfaces/user.interface';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //create user  
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  
  //get all users
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  //get user by id
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUser(id);
  }

  //update user by id
  //PUT
  @Put(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Patch(':id')
  updateUserPartial(@Param('id', ParseIntPipe) id: number, @Body() UpdateUserPartialDto: UpdateUserPartialDto) {
    return this.usersService.updateUserPartial(id, UpdateUserPartialDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
