import { DataSource } from 'typeorm';
import * as path from 'path';
import 'reflect-metadata';
import { CreateUserTable1661945684451 } from './migrations/1661945684451-CreateUserTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'nodeapp',
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'nodeapp',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [CreateUserTable1661945684451]
});