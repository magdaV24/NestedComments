import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import Fab from "@mui/material/Fab";

interface Props{
  handleToggleTheme: () => void
}

const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
  };

export default function ThemeButton({handleToggleTheme}: Props) {
  return (
    <Fab color="primary" variant="circular" sx={fabStyle} onClick={handleToggleTheme}>
      <PaletteOutlinedIcon sx={{ fontSize: "2.5rem" }} />
    </Fab>
  );
}
