import { useState } from "react";
import CreatePostButton from "../../components/CreatePostButton";
import Navbar from "../../components/Navbar";
import PostForm from "./posts/PostForm";
import PostList from "./posts/PostList";

export default function Dashboard(){

    const [openForm, setOpenForm] = useState(false)
    function handleOpenForm() {
        setOpenForm(true)
    }

    function handleCloseForm(){
        setOpenForm(false)
    }


    return (
        <>
        <Navbar/>
        <CreatePostButton handleOpenForm={handleOpenForm}/>
        <PostForm open={openForm} handleClose={handleCloseForm}/>
        <PostList />
        </>
    )
}