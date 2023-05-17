import { Card, CardHeader, CardContent, Button } from "@mui/material";
import CommentForm from "./CommentForm";
import { useState } from "react";

interface Props {
  id: number; //comment id
  createdBy: number; //id of the user who wrote the comment
  content: string;
  postId: number;
}

export default function CommentCard({ createdBy, content, id, postId }: Props) {

  const [isReplying, setIsReplying] = useState(false);
  return (
    <Card>
      <CardHeader>{"Magda"} said:</CardHeader>
      <CardContent>{content}</CardContent>
      <Button onClick={() => setIsReplying((prev) => !prev)}>REPLY</Button>
      {isReplying && (
        <CommentForm parentID={id} createdby={createdBy} id={postId} />
      )}
    </Card>
  );
}
