import {
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
  Arg,
} from "type-graphql";
import { NewUserInput } from "../graph-utils/inputTypes";
import { User } from "../graph-utils/Types";

@Resolver(() => User)
export class UserResolver {
  private userCollection: User[] = [
    {
      userName: "vishnu",
      id: "1",
      followers: ["1"],
      email: "vishnu@gmail.com",
      posts: [
        {
          Title: "s",
          Description: "sdf",
        },
      ],
    },
    {
      userName: "new name",
      id: "2",
      followers: [],
      email: "new@gmail.com",
      posts: [
        {
          Title: "s",
          Description: "sdf",
        },
      ],
    },
  ];
  @Query(() => [User])
  users() {
    return this.userCollection;
  }

  @FieldResolver()
  followers(@Root() user: User) {
    console.log(
      user.followers?.map((followerID: String) =>
        this.userCollection.find((user) => user.id === followerID)
      )
    );
    return user.followers?.map((followerID: String) =>
      this.userCollection.find((user) => user.id === followerID)
    );
  }
  @Mutation()
  addUser(@Arg("data") { email, userName }: NewUserInput): User {
    const newUSer = {
      userName,
      email,
      id: this.userCollection.length.toString(),
    };
    this.userCollection.push(newUSer);
    return newUSer;
  }

  @Query(() => User)
  ME(@Arg("id") id: String) {
    return this.userCollection.find((user) => user.id == id);
  }
}
