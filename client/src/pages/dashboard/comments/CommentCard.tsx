import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import CommentForm from "./CommentForm";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { useMutation } from "@apollo/client";
import {
  COUNT_DISLIKES,
  COUNT_LIKES,
  GIVE_DISLIKE,
  GIVE_LIKE,
  UPDATE_CONTENT,
} from "../../../GraphQL/Mutation";
import { useUser } from "../../../hooks/useUser";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import ThumbDownAltSharpIcon from "@mui/icons-material/ThumbDownAltSharp";

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
  const isDisabled = content === "[deleted]" ? true : false;
  const [newContent, setNewContent] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const title = `${username} said:`;

  const { userId } = useUser();

  const [editContent, { error }] = useMutation(UPDATE_CONTENT);
  const [giveLike, { error: err }] = useMutation(GIVE_LIKE);
  const [countLikes] = useMutation(COUNT_LIKES);

  const [giveDislike, { error: e }] = useMutation(GIVE_DISLIKE);
  const [countDislikes] = useMutation(COUNT_DISLIKES);

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

  const handleLike = (e: any) => {
    e.preventDefault();
    if (!err) {
      giveLike({
        variables: {
          commentid: parseInt(id, 10),
          userid: userId,
        },
      });
    }
  };

  const handleDislike = (event: any) => {
    event.preventDefault();
    if (!e) {
      giveDislike({
        variables: {
          commentid: parseInt(id, 10),
          userid: userId,
        },
      });
    }
  };

  useEffect(() => {
    const fetchLikes = async () => {
      const count = await countLikes({
        variables: {
          commentid: parseInt(id, 10),
        },
      });
      setLikeCount(await count.data.countLikes.count);
    };

    const fetchDislikes = async () => {
      const count = await countDislikes({
        variables: {
          commentid: parseInt(id, 10),
        },
      });
      setDislikeCount(await count.data.countDislikes.count);
    };
    fetchLikes();
    fetchDislikes();
  }, [countDislikes, countLikes, id]);

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
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              onClick={() => setIsReplying((prev) => !prev)}
              variant="contained"
              disabled={isDisabled}
            >
              REPLY
            </Button>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" onClick={handleLike}>
                <ThumbUpAltSharpIcon />
              </Button>
              <Typography
                sx={{
                  minWidth: "2rem",
                  width: "fit-content",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {likeCount}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" onClick={handleDislike}>
                <ThumbDownAltSharpIcon />
              </Button>
              <Typography
                sx={{
                  minWidth: "2rem",
                  width: "fit-content",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {dislikeCount}
              </Typography>
            </Box>
          </Box>
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
