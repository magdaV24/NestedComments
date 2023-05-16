import { LoadingButton } from "@mui/lab";
import { Modal, Box, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../../GraphQL/Mutation";
import useLocalStorage from "../../../hooks/useLocalStorage";

const btnStyles = {
  width: "100%",
  height: "3rem",
  fontSize: "1.1rem",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
  bgcolor: "primary.light",
  color: "black",
};

const style = {
  position: "absolute",
  top: "20%",
  left: "100%",
  width: 600,
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function PostForm({ open, handleClose }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  
  const { id } = useLocalStorage();

  // Create post

  const [createPost, { error }] = useMutation(CREATE_POST);

  const submitPost = (e: any) => {
    e.preventDefault();
      setLoading(true)
    if(error) {
      setMessage(error.message);
    }
    if(!error) {
      createPost({
        variables: {
          createdby: id,
          title: title,
          content: content,
        },
      });
      setTitle("");
      setContent("");
      setMessage("");
    }
      setLoading(false);
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ width: "30rem" }}
    >
      <Box component="form" sx={style} onSubmit={submitPost}>
        <Typography variant="h6">Write something!</Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
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
        <Typography>{message}</Typography>
        <LoadingButton sx={btnStyles} loading={loading} type="submit">
          CREATE POST
        </LoadingButton>
      </Box>
    </Modal>
  );
}
