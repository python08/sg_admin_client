import {
  ImageContainerStyle,
  ImageUploadFunctionStyle,
  PreviewImageStyle,
} from "@/styles/product";
import { UploadProductImageProps } from "@/types/admin-product";
import { Box, Button, CardMedia, Grid } from "@mui/material";

const UploadProductImage = (props: UploadProductImageProps) => {
  const {
    getValues,
    editImage,
    previewImage,
    onImageChange,
    setEditImage,
    apiCall,
  } = props;

  const updateImage = () => {
    if (!editImage) {
      return (
        <CardMedia
          sx={{ borderRadius: "10px", height: "100%" }}
          component="img"
          image={getValues("link")}
          alt={getValues("link")}
        />
      );
    } else if (typeof previewImage === "string") {
      return (
        <img src={previewImage} alt="previewImage" style={PreviewImageStyle} />
      );
    }
    return null;
  };

  const addNewImage = () => {
    if (getValues("link")) {
      return (
        <CardMedia
          sx={{ borderRadius: "10px", height: "100%" }}
          component="img"
          image={getValues("link")}
          alt={getValues("link")}
        />
      );
    } else if (typeof previewImage === "string") {
      return (
        <img src={previewImage} alt="previewImage" style={PreviewImageStyle} />
      );
    }

    return null;
  };

  return (
    <>
      <Box sx={ImageContainerStyle}>
        {apiCall === "PUT" && updateImage()}
        {apiCall === "POST" && addNewImage()}
      </Box>
      <Box sx={ImageUploadFunctionStyle}>
        {apiCall === "PUT" &&
          (editImage ? (
            <UploadImage onImageChange={onImageChange} />
          ) : (
            <Button onClick={() => setEditImage(true)}>Edit Image</Button>
          ))}
        {apiCall === "POST" && <UploadImage onImageChange={onImageChange} />}
      </Box>
    </>
  );
};

type UploadImageProps = {
  onImageChange: (event: any) => void;
};

const UploadImage = ({ onImageChange }: UploadImageProps) => (
  <>
    <Box>
      <input type="file" name="image" onChange={onImageChange} />
    </Box>
  </>
);

export default UploadProductImage;
