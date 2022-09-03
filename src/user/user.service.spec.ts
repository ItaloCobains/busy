import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection, getRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

// type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

// const createMockRepository = <T = any>(): MockRepository<T> => ({
//   findOne: jest.fn(),
// });

describe('UserService', () => {
  let service: UserService;
  let id;
  let date;

  beforeEach(async () => {
    service = new UserService();
    id = '';
    date = new Date();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user', () => {
    const expectOutputUser = [
      {
        id,
        name: 'Italo',
        created_at: date,
      },
    ];
  });

  // describe('findOne', () => {
  //   describe('Busca curso pelo ID', () => {
  //     it('Deve retornar o objeto User', async () => {
  //       const UserId = '1';
  //       const expectUser = {};

  //       userRepository.findOne.mockReturnValue(expectUser);

  //       const user = await service.findOne(UserId);
  //       expect(user).toEqual(expectUser);
  //     });

  //     it('Deve retornar um NotFoundException', async () => {
  //       const UserId = '1';

  //       userRepository.findOne.mockReturnValue(undefined);

  //       try {
  //         await service.findOne(UserId);
  //       } catch (err) {
  //         expect(err).toBeInstanceOf(NotFoundException);
  //         expect(err.message).toEqual(`User ${UserId} not found`);
  //       }
  //     });
  //   });
  // });
});
