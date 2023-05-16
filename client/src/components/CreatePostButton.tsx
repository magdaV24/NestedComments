import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import { Fab } from "@mui/material";

interface Props {
  handleOpenForm: () => void;
}

const fabStyle = {
  position: "fixed",
  bottom: 16,
  left: 16,
};

export default function CreatePostButton({ handleOpenForm }: Props) {
  return (
    <>
      <Fab
        variant="extended"
        color="primary"
        sx={fabStyle}
        onClick={handleOpenForm}
      >
        <CreateSharpIcon sx={{ mr: 1 }} />
        Create Post
      </Fab>
    </>
  );
}
