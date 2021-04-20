import { Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  getUser(@Param('id') id: string, @Res() response: Response) {
    response.json('vsf lixo');
  }

  //   @Post()
  //   createUser() {}
}
