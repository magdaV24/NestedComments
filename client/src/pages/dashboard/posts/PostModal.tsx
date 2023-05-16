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

interface Props {
  postId: number;
  content: string;
  title: string;
  open: boolean;
  handleClose: () => void;
}

export default function PostModal({
  open,
  handleClose,
  postId,
  title,
  content,
}: Props) {
  const {id} = useLocalStorage()
  return (
    <Modal open={open} onClose={handleClose}>
      <Box>
        <Card
          sx={{ maxWidth: 1000, marginTop: 5, height: 150, marginLeft: 40 }}
          component="div"
        >
          <CardHeader title={title} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </Card>
        <CommentForm id={postId} parentID={0} createdby={id}/>
      </Box>
    </Modal>
  );
}
