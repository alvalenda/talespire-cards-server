import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { dbConfig } from '../config/config-constants';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: dbConfig.socketPath || dbConfig.host,
  //   port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: process.env.DB_NAME || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, // ! PRODUCTION: false
};
