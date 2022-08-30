module.exports = {
  type: 'postgres',
  host: '0.0.0.0',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  // autoLoadEntities: true,
  // synchronize: true,
};
