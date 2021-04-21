import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import CreateUserDTO from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  getUser(@Param('id') id: string, @Res() response: Response) {
    response.json('vsf lixo');
  }

  @Post()
  async createUser(@Body() data: CreateUserDTO, @Res() response: Response) {
    const user = await this.usersService.createUser(data);
    response.status(201).json(user);
  }
}
