import { useNavigate } from "react-router-dom";
import { Modal, Box, TextField, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import { LoadingButton } from "@mui/lab";
import { useCallback, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { FIND_USER } from "../../../GraphQL/Mutation";
import { useLogin } from "../../../hooks/useLogin";
//import { useLogin } from "../../../hooks/useLogin";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute",
  top: "20%",
  left: "30%",
  width: 600,
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  bgcolor: "secondary.light",
  boxShadow: 24,
  p: 4,
  borderRadius: "2px",
};

const btnStyles = {
  width: "100%",
  height: "3rem",
  fontSize: "1.1rem",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
  bgcolor: "primary.dark",
  color: "secondary.dark",
};

export default function Login({ open, handleClose }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { login, currentUser, token } = useLogin();
  const loginUser = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    login(e, { username: username, password: password });
    navigate("/dashboard")
    setIsLoading(false);
  };

  console.log(currentUser, token);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={loginUser}>
          <Typography variant="h6">Welcome back!</Typography>
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <TextField
            id="standard-basic"
            type="password"
            label="Password"
            variant="standard"
            autoFocus
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <LoadingButton sx={btnStyles} loading={isLoading} type="submit">
            LOGIN
          </LoadingButton>
          <Link href="/register" variant="body2">
            {"You aren't registered yet? Create an account now!"}
          </Link>
        </Box>
      </Modal>
    </>
  );
}
