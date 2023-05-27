import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Likes extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    commentid!: number;

    @Column()
    userid!: number;

    @Column()
    liked!: boolean;
}