import Carousel from "@content/carousel/Carousel";
import { Headline } from "@components/Headline/Headline";
import { Box } from "@mui/material";

type UpdatesProps = {
  updates: any;
};

const Updates = (props: UpdatesProps) => {
  const { updates } = props;
  return (
    <>
      <Box sx={{ textAlign: "center" }} pt="1rem">
        <Headline headLine="Latest updates" />
      </Box>
      <Box
        sx={{
          height: "25rem",
          width: "100%",
          textAlign: "center",
          border: "none",
          borderRadius: "10px",
        }}
      >
        <Carousel sliderData={updates} />
      </Box>
    </>
  );
};

export default Updates;
