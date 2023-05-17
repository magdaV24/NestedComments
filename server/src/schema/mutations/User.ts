import { GraphQLInt, GraphQLString } from "graphql";
import { UserType } from "../types/UserType";
import { Users } from "../../entities/Users";
import { compare, hash } from "bcryptjs"
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

export const CREATE_USER = {
  type: UserType,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    token: { type: GraphQLString }
  },
  async resolve(parent: any, args: any) {
    let { username, password, email, token } = args;
    const safePassword: any = (await hash(password, 12)).toString();
    
    token = jwt.sign(
      {
        id: username,
      },
      "jwtkey"
    );
    await Users.insert({username, password: safePassword, email, token});
    return {username, safePassword, email, token}
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

export const FIND_USER_BY_ID = {
  type: UserType,
  args:{
    id: {type: GraphQLInt }
  },
  resolve: async (parent: any, args: any) => {
    const { id } = args;
    const user = await Users.findOne({where: { id }});
    if(!user){
      throw new Error("There is no user with this id!");
    }
    return user
  }
}