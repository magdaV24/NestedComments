import { GET_POSTS } from "../../../GraphQL/Query";
import { useQuery } from "@apollo/client";
import PostCard from "./PostCard";
import { Box } from "@mui/material";

export default function PostList() {
  const { data } = useQuery(GET_POSTS);
  return (
    <Box sx={{ marginLeft: 45 }}>
      {data &&
        data.getPosts.map((post: any) => (
          <PostCard title={post.title} content={post.content} key={post.id} id={parseInt(post.id, 10)}/>
        ))}
    </Box>
  );
}
