import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Children extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  createdby!: number;
  
  @Column()
  postid!: number;

  @Column()
  parentid!: number;

  @Column()
  content!: string;
}
