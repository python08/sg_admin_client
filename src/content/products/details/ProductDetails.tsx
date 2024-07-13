import { useState } from 'react';
import { WhatsappShare } from '@components/WhatsappShare/WhatsappShare';
import { color } from '@global/colors';
import { fontSize, fontWeight } from '@global/font';
import { FiberManualRecord } from '@mui/icons-material';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import FlexViewProductList from '@content/products/view/flex/ProductList';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import { displayFlexAlignCenter } from '@global/global.style';
import { ProductsType } from '@common/temp/temp';
import { isEmpty } from 'lodash';
import ProductQuantity from '../quantity/ProductQuantity';
import { Section } from '../constant/main';

type ProductDetailsProps = {
  title: string;
  brief: string;
  productPrice: string;
  products: ProductsType[];
};

const ProductDetails = (props: ProductDetailsProps) => {
  const { title, brief, productPrice, products } = props;
  const [quantity, setQuantity] = useState(1);

  if (title && isEmpty(brief)) {
    return null;
  }

  // FP
  // add colour to the title
  return (
    <Box p="1rem">
      <Box>
        <Box>
          <Typography
            variant="h1"
            fontSize={fontSize[9]}
            fontWeight={fontWeight[1]}
            color={color.main.primary}
          >
            {title}
          </Typography>
        </Box>
        <Box pt="1rem">
          <Box sx={displayFlexAlignCenter}>
            <CurrencyRupeeRoundedIcon />
            <Typography
              variant="subtitle2"
              component="p"
              fontSize={fontSize[8]}
              fontWeight={fontWeight[1]}
            >
              {productPrice}
            </Typography>
          </Box>
        </Box>
        <Box>
          <List>
            {brief.split('*').map((data: string) => (
              <ListItem
                key={data}
                sx={{ padding: '0.3rem 0.3rem 0.3rem 0rem' }}
              >
                <FiberManualRecord
                  sx={{ fontSize: 'small', marginRight: '5px' }}
                />
                <Typography
                  variant="subtitle2"
                  component="p"
                  fontWeight={fontWeight[0]}
                  color={color.grey[0]}
                >
                  {data}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box pt="1rem">
        <Grid container>
          <Grid item xs={6}>
            <Box height="4.4rem">
              <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box height="4.4rem" mt="2.1rem">
              <WhatsappShare quantity={quantity} productTitle={title} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Box>
          <Typography
            variant="subtitle2"
            fontSize={fontSize[6]}
            fontWeight={fontWeight[1]}
          >
            You may also like…
          </Typography>
        </Box>
        <Box pt="1rem" height="13.5rem">
          <FlexViewProductList
            products={products}
            productCardHeight="7rem"
            section={Section.suggested}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
