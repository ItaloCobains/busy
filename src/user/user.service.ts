import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private user: User[] = [
    {
      id: 1,
      name: 'User 1',
      email: 'user1@gmail.com',
      password: 'password1',
      avatar: 'https://www.google.com/user/avatar',
    },
  ];

  findAll() {
    return this.user;
  }

  findOne(id: string) {
    const user = this.user.find((user) => user.id === +id);
    if (!user) {
      throw new HttpException(`User ${id} not found`, HttpStatus.NOT_FOUND);
    }

    return user;
  }

  create(CreateUserDto: any) {
    this.user.push(CreateUserDto);
  }

  update(id: string, UpdateUserDto: any) {
    const indexUser = this.user.findIndex((user) => user.id === +id);

    return (this.user[indexUser] = UpdateUserDto);
  }

  remove(id: string) {
    const indexUser = this.user.findIndex((user) => user.id === +id);

    if (indexUser >= 0) {
      this.user.splice(indexUser, 1);
    }
  }
}
