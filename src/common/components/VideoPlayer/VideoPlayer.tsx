import { CardMedia } from "@mui/material";

type VideoPlayerType = {
  src: string;
};

const VideoPlayer = (props: VideoPlayerType) => {
  const { src } = props;
  return (
    <CardMedia
      sx={{ borderRadius: "10px" }}
      component="video"
      src={src}
      autoPlay
      loop
      muted
    />
  );
};
export default VideoPlayer;
