import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Modal,
  Typography,
} from "@mui/material";
import CommentForm from "../comments/CommentForm";
import useLocalStorage from "../../../hooks/useLocalStorage";
import CommentList from "../comments/CommentList";

interface Props {
  postId: number;
  content: string;
  title: string;
  open: boolean;
  handleClose: () => void;
}

const styles = {
  marginTop: 5,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 0,
  overflow: "scroll",
  bgcolor: "background.paper",
};

export default function PostModal({
  open,
  handleClose,
  postId,
  title,
  content,
}: Props) {
  const { id } = useLocalStorage();
  return (
    <Modal open={open} onClose={handleClose} sx={styles}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%"
        }}
      >
        <Card
          sx={{ maxWidth: "75%", marginTop: 5, height: "fit-content", 
          bgcolor: "background.paper" }}
          component="div"
        >
          <CardHeader title={title} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </Card>
        <CommentForm id={postId} parentID={0} createdby={id} />
        <CommentList postId={postId} />
      </Box>
    </Modal>
  );
}
