import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dislikes extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    commentid!: number;

    @Column()
    userid!: number;

    @Column()
    disliked!: boolean;
}