import { Test, TestingModule } from '@nestjs/testing';
<<<<<<< HEAD
import { INestApplication, ValidationPipe } from '@nestjs/common';
=======
import { HttpStatus, INestApplication } from '@nestjs/common';
>>>>>>> release/1.6.0
import * as request from 'supertest';
import { UserModule } from '../../src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserDto } from '../../src/user/dto/create-user-dto';

describe('User: /user', () => {
  let app: INestApplication;

<<<<<<< HEAD
  const user = {
    name: 'ItaloCobains',
    email: 'italo@gmail.com',
    password: 'italo12345',
=======
  const user: CreateUserDto = {
    name: 'Italo',
    email: 'italo@gmail.com',
    password: 'ITALO12345',
>>>>>>> release/1.6.0
    avatar: 'http://avatar.com',
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        UserModule,
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5433,
          username: 'postgres',
          password: 'docker',
          database: 'testdb',
          autoLoadEntities: true,
          synchronize: true,
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Create POST /user', () => {
    return request(app.getHttpServer())
      .post('/user')
      .send(user as CreateUserDto)
      .expect(HttpStatus.CREATED);
  });
});
