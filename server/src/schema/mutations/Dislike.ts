import { GraphQLInt } from "graphql";
import { Dislikes } from "../../entities/Dislikes";
import { Likes } from "../../entities/Likes";
import { CountType } from "../types/CountType";
import { DislikeType } from "../types/DislikeType";
import { LikeType } from "../types/LikeType";

export const GIVE_DISLIKE = {
  type: DislikeType,
  LikeType,
  args: {
    commentid: { type: GraphQLInt },
    userid: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { commentid, userid } = args;

    const find = await Dislikes.findOne({
      where: { commentid: commentid, userid: userid, disliked: true },
    });

    if (find) {
      throw new Error("This user had already disliked this comment!");
    }

    const likedComment = await Likes.findOne({
      where: { commentid: commentid, userid: userid, liked: true },
    });

    if (likedComment) {
      Likes.delete({ id: likedComment.id });
    }

    await Dislikes.insert({ commentid, userid, disliked: true });
  },
};

export const COUNT_DISLIKES = {
  type: CountType,
  args: {
    commentid: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { commentid } = args;
    const count = await Dislikes.count({ where: { commentid: commentid } });
    return { count: count };
  },
};
