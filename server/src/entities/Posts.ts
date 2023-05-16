import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Posts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  createdby!: number;

  @Column()
  title!: string;

  @Column()
  content!: string;
}
