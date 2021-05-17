import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import CreateUserDTO from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers() {
    const user = await this.usersService.getAllUsers();

    return user;
  }

  @Post()
  async createUser(@Body() data: CreateUserDTO) {
    const user = await this.usersService.createUser(data);
    return user;
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    // const user = this.usersService./
  }
}
