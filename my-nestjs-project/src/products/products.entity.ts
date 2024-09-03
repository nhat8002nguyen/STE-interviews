import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
class Rating {
  @Field()
  average: number;

  @Field()
  reviews: number;
}

@Entity()
@ObjectType()
export class Product {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  price: string;

  @Field(() => Rating)
  @Column('json')
  rating: Rating;

  @Field()
  @Column()
  image: string;
}
