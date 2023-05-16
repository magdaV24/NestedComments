import TagSharpIcon from "@mui/icons-material/TagSharp";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <TagSharpIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NestedComments
          </Typography>
          <Button color="inherit" variant="outlined">LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
