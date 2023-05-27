import { GraphQLInt } from "graphql";
import { LikeType } from "../types/LikeType";
import { DislikeType } from "../types/DislikeType";
import { Likes } from "../../entities/Likes";
import { Dislikes } from "../../entities/Dislikes";
import { CountType } from "../types/CountType";

export const GIVE_LIKE = {
  type: LikeType,
  DislikeType,
  args: {
    commentid: { type: GraphQLInt },
    userid: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { commentid, userid } = args;

    //verific daca utilizatorul deja a dat like comentariului;

    const find = await Likes.findOne({
      where: { commentid: commentid, userid: userid, liked: true },
    });

    if (find) {
      throw new Error("This user had already liked this comment!");
    }

    // verific daca utilizatorul a dat dislike comentariului

    const dislikedComment = await Dislikes.findOne({
      where: { commentid: commentid, userid: userid, disliked: true },
    });

    if (dislikedComment) {
      // sterg dilike-ul din baza de date
      Dislikes.delete({ id: dislikedComment.id });
    }

    await Likes.insert({ commentid, userid, liked: true });
  },
};

export const COUNT_LIKES = {
  type: CountType,
  args: {
    commentid: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { commentid } = args;
    const count = await Likes.count({ where: { commentid: commentid } });
    return { count: count };
  },
};
