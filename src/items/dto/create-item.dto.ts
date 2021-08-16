import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class ItemType {
  @ApiProperty({ type: String })
  @Field(() => ID)
  @IsString()
  readonly id?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @Field(() => Int)
  @IsNumber()
  readonly price: number;
  @Field()
  @IsString()
  readonly description: string;
}