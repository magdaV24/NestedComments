import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Box,
  TextField,
} from "@mui/material";
import CommentForm from "./CommentForm";
import { useState } from "react";
import CommentList from "./CommentList";
import { useMutation } from "@apollo/client";
import { UPDATE_CONTENT } from "../../../GraphQL/Mutation";
import { useUser } from "../../../hooks/useUser";

interface Props {
  id: string;
  createdBy: number;
  content: string;
  postId: number;
  username: string;
}

export default function CommentCard({
  content,
  id,
  postId,
  username,
  createdBy,
}: Props) {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDisabled, setIsDisabled] = useState(
    content === "[deleted]" ? true : false
  );
  const [newContent, setNewContent] = useState("");

  const title = `${username} said:`;

  const { userId } = useUser();

  const [editContent, { error }] = useMutation(UPDATE_CONTENT);

  const editComment = (
    e: any,
    id: number,
    content: string,
    createdBy: number
  ) => {
    e.preventDefault();

    if (!error && userId === createdBy) {
      editContent({
        variables: {
          id: id,
          newContent: content,
        },
      });
    }
  };

  const deleteComment = (e: any, id: number) => {
    e.preventDefault();
    if (!error) {
      editContent({
        variables: {
          id: id,
          newContent: "[deleted]",
        },
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 5,
        justifyContent: "flex-end",
      }}
    >
      <Card sx={{ width: "100%", bgcolor: "primary.light", padding: 2 }}>
        <CardHeader title={title} />
        <CardContent>{content}</CardContent>
        <Box
          sx={{
            width: "100%",
            padding: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={() => setIsReplying((prev) => !prev)}
            variant="contained"
            disabled={isDisabled}
          >
            REPLY
          </Button>
          {userId === createdBy && (
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="contained"
                onClick={() => setIsEditing((prev) => !prev)}
                disabled={isDisabled}
              >
                EDIT
              </Button>
              <Button
                color="error"
                variant="contained"
                disabled={isDisabled}
                onClick={(e) => deleteComment(e, parseInt(id, 10))}
              >
                DELETE
              </Button>
            </Box>
          )}
        </Box>
        {isReplying && <CommentForm parentID={parseInt(id, 10)} id={postId} />}
        {isEditing && (
          <Box
            component="form"
            onSubmit={(e) =>
              editComment(e, parseInt(id, 10), newContent, createdBy)
            }
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="content"
              label="Content"
              name="content"
              autoFocus
              multiline
              rows={6}
              onChange={(e) => setNewContent(e.target.value)}
              value={newContent}
            />
            <Button type="submit">Save!</Button>
          </Box>
        )}
      </Card>

      <div
        style={{
          width: "98%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <CommentList postId={postId} parentId={parseInt(id, 10)} />
      </div>
    </Box>
  );
}
