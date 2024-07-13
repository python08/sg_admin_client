import Backdrop, { BackdropTypeMap } from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { LoaderStyle } from '@components/styles/style';

const Loader: OverridableComponent<BackdropTypeMap<{}, 'div'>> = () => (
  <Backdrop sx={LoaderStyle} open>
    <CircularProgress color="inherit" />
  </Backdrop>
);
export default Loader;
