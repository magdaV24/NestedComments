import { useState, useEffect } from "react";

export function useUser() {
  
  const user = JSON.parse(localStorage.getItem("user")!);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(0);
  const id = parseInt(user.id, 10)

  useEffect(() => {
    setUsername(user.username);
    setUserId(id);
  }, [id, user.username]);

  return {username, userId};
}
