import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { FIND_USER_BY_ID } from "../GraphQL/Mutation";

interface Props {
  id: number;
}

export function useUser({ id }: Props) {
  const [getUserById] = useMutation(FIND_USER_BY_ID);
  const [username, setUsername] = useState();

  useEffect(() => {
    getUserById({ variables: { id: id } }).then((res) => {
      setUsername(res.data.getUserById.username)
    })
  }, [getUserById, id]);

  console.log(username);
  return {username};
}
