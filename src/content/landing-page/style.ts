// eslint-disable
export const heroDescriptionStyle = (extraLarge: boolean) => {
  // large screen
  if (extraLarge) {
    return {
      padding: '6rem 2rem 2rem 4rem',
      marginTop: '',
    };
  }
  return {
    padding: '2.5rem 2rem 2rem 4rem',
    marginTop: '4rem',
  };
};

const mainImageContainer = (smallSize: boolean) => ({
  height: smallSize ? '' : '100vh',
  width: '100%',
  position: smallSize ? '' : 'relative',
  borderTopLeftRadius: '100px',
  borderBottomLeftRadius: '100px',
  overflow: 'hidden',
});

const secondaryImageContainer = {
  height: '100%',
  width: '100%',
};

const leftSection = (lgDown: boolean) => ({
  height: '100vh',
  zIndex: 5,
  color: lgDown ? 'white' : 'black',
});

const heroDescriptionContainer = (lgDown: boolean) => ({
  position: 'relative',
  height: '50vh',
  borderTopRightRadius: lgDown ? '' : '100px',
  borderBottomRightRadius: lgDown ? '' : '100px',
  overflow: 'hidden',
  color: 'white',
  backgroundColor: lgDown ? '' : 'rgba(0,0,0,0.4)',
});

const houseImage = (lgDown: boolean) => ({
  height: lgDown ? '5rem' : '7.5rem',
  width: lgDown ? '5rem' : '7.5rem',
  display: 'inline-block',
  marginLeft: '2rem',
  marginBottom: '1rem',
});

const hero1 = (color: any, lgDown: boolean) => ({
  textShadow: lgDown
    ? ''
    : `-2px -2px 0 ${color.main.primary}, 2px -2px 0 ${color.main.primary},-2px 2px 0 ${color.main.primary},2px 2px 0 ${color.main.primary}`,
  color: color.main.pureWhite,
});

export const style = {
  mainImageContainer,
  secondaryImageContainer,
  leftSection,
  heroDescriptionContainer,
  houseImage,
  hero1,
};
