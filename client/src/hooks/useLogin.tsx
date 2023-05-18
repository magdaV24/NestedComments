import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { FIND_USER } from "../GraphQL/Mutation";

interface Props {
  username: string;
  password: string;
}

export function useLogin() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")!) || null
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")!) || null
  );

  const [getUser, { error }] = useMutation(FIND_USER);

  const login = (e: any, { username, password }: Props) => {
    e.preventDefault();
    if (!error) {
      getUser({ variables: { username: username, password: password } })
        .then((res) => {
          setCurrentUser(res.data.getUser);
          setToken(res.data.getUser.token);
        })
        .catch((err) => console.log(err));
    }
    return { currentUser, token };
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("token", JSON.stringify(token));
  }, [currentUser, error, token]);

  const logout = (e: any) => {
    e.preventDefault();
    localStorage.clear();
  }

  return { currentUser, token, login, logout };
}
