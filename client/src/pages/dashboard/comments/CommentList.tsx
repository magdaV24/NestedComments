import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../../../GraphQL/Query";
import CommentCard from "./CommentCard";
import { Box } from "@mui/material";

interface Props {
  postId: number;
}

export default function CommentList({ postId }: Props) {
  const { data } = useQuery(GET_POST_COMMENTS, {
    variables: { postid: postId },
  });
  console.log(data);
  return (
    <Box sx={{width: "75%",display: "flex", flexDirection: "column", gap: 5}}>
      {data &&
        data.getPostComments.map((comment: any) => (
            <CommentCard
            id={comment.id}
            postId={postId}
            content={comment.content}
            createdBy={comment.createdby}
            key={comment.id}
          />
        ))}
    </Box>
  );
}
