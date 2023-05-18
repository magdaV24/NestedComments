import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Modal,
  Typography,
} from "@mui/material";
import CommentForm from "../comments/CommentForm";
import CommentList from "../comments/CommentList";

interface Props {
  postId: number;
  content: string;
  title: string;
  open: boolean;
  handleClose: () => void;
}

const styles = {
  minHeight: "100%",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: 3,
  bgcolor: "background.paper",
  overflow: "scroll",
};

export default function PostModal({
  open,
  handleClose,
  postId,
  title,
  content,
}: Props) {
  return (
    <Modal open={open} onClose={handleClose} sx={styles}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          maxHeight: "fit-content",
          bgcolor: "background.paper",
          padding: 5,
          overflowY: "scroll",
          gap: 3,
          position: "absolute"
        }}
      >
        <Card
          sx={{
            maxWidth: "100%",
            height: "fit-content",
            bgcolor: "background.paper",
            boxShadow: "none"
          }}
          component="div"
        >
          <CardHeader title={title} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </Card>
        <CommentForm id={postId} parentID={0}/>
        <Typography variant="h4" sx={{width: "100%"}}>Comments:</Typography>
        <CommentList postId={postId} parentId={0}/>
      </Box>
    </Modal>
  );
}
