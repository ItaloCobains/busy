import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  findAll(@Res() response) {
    return response.status().send('Listagem de user');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `User id:${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `User id:${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `User id:${id}`;
  }
}
