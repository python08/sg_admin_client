import styled from '@emotion/styled';
import { ButtonBase } from '@mui/material';

const Container = { padding: '0.2rem' };
const Item = {
  padding: '0.2rem',
  textAlign: 'center',
};

export const ImageButton = styled(ButtonBase)(({ shadow, active }: any) => ({
  height: '4.5rem',
  width: '4.5rem',
  boxSizing: 'border-box',
  borderRadius: '50px',
  boxShadow: active ? shadow : '',
  overflow: 'hidden',
  cursor: 'pointer',
  webkitTapHighlightColor: 'transparent',
  '&:hover, &.Mui-focusVisible': {
    boxShadow: active ? shadow : '',
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageContainer = (mode: string) => ({
  height: '4.5rem',
  width: '4.5rem',
  boxSizing: 'border-box',
  borderRadius: '50px',
  boxShadow: mode,
  overflow: 'hidden',
  cursor: 'pointer',
  '-webkit-tap-highlight-color': 'transparent',
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
});

const ImageStyle = {
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  borderRadius: 'inherit',
};

const activeFestival = {
  border: '2px solid green',
  borderRadius: '50px',
  padding: '0.2rem',
};

const inActiveFestival = {
  border: '2px solid white',
  borderRadius: '50px',
  padding: '0.2rem',
};

const FestivalContainer = {
  display: '-webkit-box',
  justifyContent: 'center',
  alignItems: 'center',
  overflowX: 'scroll',
  height: '5.9rem',
};

const FestivalBox = { height: '5rem', width: '5rem', marginRight: '0.7rem' };

export default {
  Container,
  Item,
  ImageContainer,
  ImageStyle,
  activeFestival,
  inActiveFestival,
  FestivalContainer,
  FestivalBox,
};
