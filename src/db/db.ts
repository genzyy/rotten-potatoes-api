import { createConnection } from 'typeorm';

/**
 * An ORM is a technique which can be used to read or write to the
 * database using your own language or should say a global language
 * in which your project is written.
 * Link:
 * https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one
 */

export const connect = async () => {
  const connection = await createConnection({
    type: 'sqlite',
    database: 'database.db',
    name: 'default',
    synchronize: false,
    logging: true,
    migrationsTableName: 'custom_migration_table',
    entities: [__dirname + '/models/*.js'],
    migrations: [__dirname + '/migrations/*.js'],
    cli: {
      entitiesDir: __dirname + '/models/',
      migrationsDir: __dirname + '/migrations/'
    }
  });
};
