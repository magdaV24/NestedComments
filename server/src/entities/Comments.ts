import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comments extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  createdby!: number;

  @Column()
  postid!: number;

  @Column()
  content!: string;

  @Column()
  parentid!: number;
}
