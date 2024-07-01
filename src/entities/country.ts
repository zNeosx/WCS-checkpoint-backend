import { Field, InputType, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  name: string;

  @Column({ unique: true })
  @Field(() => String)
  code: string;

  @Column()
  @Field(() => String)
  continentCode: string;

  @Column()
  @Field(() => String)
  emoji: string;
}

@InputType()
export class NewCountryInput {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  continentCode: string;

  @Field()
  emoji: string;
}
