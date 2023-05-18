import TagSharpIcon from "@mui/icons-material/TagSharp";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useLogin } from "../hooks/useLogin" 
export default function Navbar() {
  const { logout } = useLogin()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <TagSharpIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NestedComments
          </Typography>
          <Button color="inherit" variant="outlined" onClick={logout}>LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
