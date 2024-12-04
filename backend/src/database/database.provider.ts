import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'OWdV9ZcdcWy1sN',
        database: 'bookshelf-db',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, // must be false in production - otherwise we can lose production data.
      });

      return dataSource.initialize();
    },
  },
];
