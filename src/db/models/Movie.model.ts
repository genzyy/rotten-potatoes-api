/**
 * The model maps the table to our codebase
 * for a better access to the data using typeorm.
 */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('movies')
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  plot_summary: string;
  @Column()
  duration: number;
}
