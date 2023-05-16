import { Card, CardActionArea, CardContent, CardHeader, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import PostModal from "./PostModal";

interface Props {
  id: number;
  title: string;
  content: string;
}

export default function PostCard({ id, title, content }: Props) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [showModal, setShowModal] = useState(false);
  function closeModal(){
    setShowModal(false)
  }

  return (
    <>
    <Card sx={{ maxWidth: 500, marginTop: 5, height: 150 }} component='div' data-aos="fade-left">
      <CardActionArea sx={{ height: "100%" }} onClick={() => setShowModal(true)}>
      <CardHeader
          title={title}
         />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content.substring(0, 100)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <PostModal open={showModal} handleClose={closeModal} postId={id} title={title} content={content}/>
    </>
  );
}
