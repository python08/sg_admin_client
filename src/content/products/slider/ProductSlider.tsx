import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Loader from "@components/Backdrop/Loader";

import ProductChips from "./ProductChips";

// FP chips
const ProductSlider = () => {
  // const [value, setValue] = useState(0);
  // const [products, setProducts] = useState<ProductsType[]>();
  const products: any[] = [];

  // const handleChange = (event: SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

  if (!products) return <Loader open />;

  return (
    <Box sx={{ bgcolor: "background.paper", fontSize: "48px" }}>
      <Tabs
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        {products.map((product) => (
          <ProductChips label={product.name} />
        ))}
      </Tabs>
    </Box>
  );
};

export default ProductSlider;
