import { Card, CardHeader, CardContent, Button, Box } from "@mui/material";
import CommentForm from "./CommentForm";
import { useState } from "react";
import CommentList from "./CommentList";
import { useUser } from "../../../hooks/useUser";

interface Props {
  id: string; //comment id
  createdBy: number; //id of the user who wrote the comment
  content: string;
  postId: number;
}

export default function CommentCard({ createdBy, content, id, postId }: Props) {
  const [isReplying, setIsReplying] = useState(false);

  const { username } = useUser({ id: createdBy });
  const title = `${username} said:`

  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5, justifyContent: "flex-end",}}>
      <Card sx={{ width: "100%", bgcolor: "primary.light", padding: 2}}>
        <CardHeader title={title} />
        <CardContent>{content}</CardContent>
        <Button onClick={() => setIsReplying((prev) => !prev)} variant="contained">REPLY</Button>
        {isReplying && (
          <CommentForm
            parentID={parseInt(id, 10)}
            createdby={createdBy}
            id={postId}
          />
        )}
      </Card>

      <div style={{ width: "98%",display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
        <CommentList postId={postId} parentId={parseInt(id, 10)} />
      </div>
    </Box>
  );
}
