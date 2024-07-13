import { Box, Typography } from '@mui/material';
import { color } from '@global/colors';
import { fontWeight } from '@global/font';

import { fallBackStyle } from '../styles/style';

const FallBack = () => (
  <Box sx={fallBackStyle.WipBg}>
    <Box component="div" sx={fallBackStyle.container} id="header">
      <Box sx={fallBackStyle.title}>
        <Box>
          <Typography
            variant="h2"
            component="h1"
            fontWeight={fontWeight[1]}
            color={color.main.black}
          >
            Oops.. sorry for the inconvenience something went wrong...
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h2"
            component="h1"
            fontWeight={fontWeight[1]}
            color={color.main.black}
          >
            Server down, please visit after some time.
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default FallBack;
