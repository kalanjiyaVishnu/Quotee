import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  id: String;

  @Field(() => String)
  userName: String;

  @Field(() => String)
  email: String;

  @Field(() => [Post], { nullable: true })
  posts?: Post[];

  @Field(() => [User])
  followers?: String[];
}
@ObjectType()
export class Post {
  @Field(() => String)
  Title: String;

  @Field(() => String)
  Description: String;
}
