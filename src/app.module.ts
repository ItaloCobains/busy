import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    UserModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'db',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'docker',
    //   database: 'nodeapp',
    //   entities: [__dirname + '/**/*.entity.js'],
    //   autoLoadEntities: false,
    //   synchronize: false,
    // }),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
