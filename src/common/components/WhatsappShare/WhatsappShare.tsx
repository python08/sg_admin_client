import { WhatsappShareStyle } from '@components/styles/style';
import { Box, Button } from '@mui/material';

type WhatsappShareProps = {
  quantity: string | number;
  productTitle: string;
};

export const WhatsappShare = (props: WhatsappShareProps) => {
  const { productTitle, quantity } = props;
  const number = '919702535617';
  const text = `More details for ${quantity} quantity of ${productTitle}`;
  const link = `https://wa.me/${number}?text=${encodeURI(text)}`;

  return (
    <Box textAlign="center">
      <Button
        variant="outlined"
        size="small"
        href={link}
        sx={WhatsappShareStyle}
      >
        Get details on whatsapp
      </Button>
    </Box>
  );
};
