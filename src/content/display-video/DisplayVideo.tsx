import { Box } from "@mui/material";
import VideoPlayer from "@components/VideoPlayer/VideoPlayer";
import { welcomeVideoUrl } from "@/api/constant/constant";

import { welcomeVideoStyle } from "./style";

const WelcomeVideo = () => (
  <Box sx={welcomeVideoStyle}>
    <VideoPlayer src={`${process.env.NEXT_PUBLIC_S3_URL_ENPOINT}/video/Intro.mp4`} />
  </Box>
);

export default WelcomeVideo;
