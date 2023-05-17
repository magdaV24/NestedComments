import { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } from "graphql";
import { UserType } from "../types/UserType";
import { Users } from "../../entities/Users";
import { compare } from "bcryptjs";
import Cookies  from "js-cookie"

export const GET_USER_USERNAME = {
  type: new GraphQLList(UserType),
  resolve(): any {
    return Users.find();
  },
};

export const FIND_USER = {
  type: UserType,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: async (parent: any, args: any) => {
    const { username, password } = args;
    const user = await Users.findOne({ where: { username } });
    if (!user) {
      throw new Error("User not found!");
    }
    const userPassword = user.password;
    const verification = await compare(password, userPassword);

    if (!verification) {
      throw new Error("Incorrect password!");
    }
    Cookies.set("access_token", user.token, {expires: 2});
    return user
  },
};
