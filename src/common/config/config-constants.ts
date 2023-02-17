export const server = {
  port: 3333,
};

export const dbConfig: Database = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'veros',
  password: '!@!veros',
  database: 'veros',
  socketPath: '/var/run/postgresql',
};

type Database = {
  type: 'postgres';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  socketPath: string;
};
