import { useEffect, useState } from "react";

export default function useLocalStorage () {
    const currentUser = JSON.parse(localStorage.getItem("user")!)
    const [id, setId] = useState(0);

    const temp = currentUser.id;
    useEffect(() => {
        setId(parseInt(temp, 10))
    },[temp])

    return {currentUser, id}
} 