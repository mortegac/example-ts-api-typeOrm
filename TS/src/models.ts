import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User{
	
	@PrimaryGeneratedColumn()
	id: Number;


	@Column()
	firstName: String;
	
	@Column()
	lastName: String;
}