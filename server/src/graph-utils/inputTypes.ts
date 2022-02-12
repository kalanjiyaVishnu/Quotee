import { InputType, Field } from "type-graphql";
import { User } from "./Types";

@InputType()
export class NewUserInput implements Partial<User> {
  @Field()
  userName: String;
  @Field()
  email: String;
}
