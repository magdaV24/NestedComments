import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Box, Typography, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../../../GraphQL/Mutation";

interface Props {
  createdby: number;
  id: number;
  parentID: number;
}
const btnStyles = {
  width: "100%",
  height: "3rem",
  fontSize: "1.1rem",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
  bgcolor: "primary.light",
  color: "black",
};

const style = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  bgcolor: "secondary.light",
  boxShadow: 24,
  p: 4,
  marginTop: 2,
  color: "white"
};

export default function CommentForm({ id, parentID, createdby }: Props) {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [createComment, { error }] = useMutation(CREATE_COMMENT);

  const submitComment = (e: any) => {
      e.preventDefault();
      if(!error){
        createComment({
          variables: {
            createdby: createdby,
            postid: id,
            content: content,
            parentid: parentID
          },
        });
      }
      
      setContent("");
    setIsLoading(false)
  };

  return (
    <Box sx={style} component="form" onSubmit={submitComment}>
      <Typography variant="h6" color="white">Write a comment!</Typography>
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
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />

      <LoadingButton sx={btnStyles} loading={isLoading} type="submit">
        <SendIcon />
      </LoadingButton>
    </Box>
  );
}
