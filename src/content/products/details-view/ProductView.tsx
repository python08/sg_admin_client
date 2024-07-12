import { Box, Button, CardMedia, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Categories, ProductViewProps } from "@common/temp/temp";
import ProductDetails from "../details/ProductDetails";
import { getProductByCategory } from "../utils/utils";
import AlertDialog from "@/common/components/Dialog/AlertDialog";

const ProductView = (props: ProductViewProps) => {
  const {
    products,
    productDetails,
    handleActivation,
    setProductActivationModalOpen,
    handleProductActivationDesicion,
    openProductActivationModal,
    setProductDeletionModalOpen,
    handleProductDeletionDesicion,
    openProductDeletionModal,
  } = props;
  const { title, brief, link, price, isActive, _id } = productDetails;
  const ladoos = getProductByCategory(products, Categories.Ladoo).filter(
    /* eslint-disable */
    (product) => product._id !== productDetails._id
  );
  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <AlertDialog
        alertDialogTitle="Product Action"
        alertDialogDescription="Please verify all the details before activate/de-activate the product"
        handleClose={() => setProductActivationModalOpen(false)}
        yes={() => handleProductActivationDesicion(_id, isActive)}
        open={openProductActivationModal}
      />
      <AlertDialog
        alertDialogTitle="Delete Product"
        alertDialogDescription="Please verify all the details before deleting the product"
        handleClose={() => setProductDeletionModalOpen(false)}
        yes={() => handleProductDeletionDesicion(_id)}
        open={openProductDeletionModal}
      />
      <Grid container p="1rem">
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box
            p={lgDown ? "" : "1rem"}
            sx={{ boxSizing: "border-box", height: lgDown ? "30rem" : "40rem" }}
          >
            <CardMedia
              sx={{ borderRadius: "10px", height: "100%" }}
              component="img"
              image={link}
              alt={title}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <ProductDetails
            title={title}
            brief={brief}
            productPrice={price}
            products={ladoos}
          />
        </Grid>
        <Grid item xs={12}>
          <Box textAlign={"center"}>
            <Button
              sx={{ mr: "0.5rem" }}
              variant="outlined"
              onClick={() =>
                setProductActivationModalOpen(!openProductActivationModal)
              }
            >
              {isActive ? "De-activate" : "Activate"}
            </Button>
            <Button
              sx={{ ml: "0.5rem" }}
              variant="outlined"
              onClick={() =>
                setProductDeletionModalOpen(!openProductDeletionModal)
              }
            >
              Delete
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductView;
