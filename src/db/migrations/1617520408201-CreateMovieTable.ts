/**
 * “A migration is a set of instructions that define precise steps to develop a new version of the database”.
 * This is used to keep the database in sync with our actual database so that it can
 * add the changes we have made to the real time database and add it to the saved database.
 */

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMovieTable1617520408201 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'plot_summary',
            type: 'text',
            isNullable: false
          },
          {
            name: 'duration',
            type: 'integer',
            isNullable: false
          }
        ]
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.dropTable('movies');
  }
}

/**
 * Why we need them? Whenever we decide to update our models, for example adding the column “rating” to our Movie class, using migrations allows us to:

    Avoid writing plain SQLite queries (or whatever language you are using)
    Store a history of the changes that we applied into our database (and also their order) so that it can be easy to synchronize a newly created database with the schema we’ve created so far.
 */
