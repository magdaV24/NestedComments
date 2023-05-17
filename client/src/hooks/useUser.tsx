import { useQuery } from "@apollo/client";
import { FIND_USER_BY_ID } from "../GraphQL/Query";
import { useState, useEffect } from "react";

interface Props {
  id: number;
}

export default function useUser({ id }: Props) {
  const { data } = useQuery(FIND_USER_BY_ID, { variables: { id: id } });
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(data);
  }, [data]);

  console.log(username);
  return username;
}
