import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MemphisFond from '../assets/img/memphis-fond.png';
// import Image from './Image';

const useStyles = makeStyles({
  vignette: {
    width: '280px',
    height: '150px',
    margin: 'auto',
    display: 'flex',
    position: 'relative',
  },
  background: {
    width: '100%',
    height: '100px',
    background: `url(${MemphisFond})`,
    margin: 'auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '200px',
    height: '100%',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  slide2: {
    transitionDelay: '0.3s',
  },
  '@media (min-width: 1200px)': {
    vignette: {
      width: '45%',
      height: '250px',
    },
    content: {
      width: '400px',
    },
    background: {
      height: '200px',
    },
  },
});

const baseUrl = require.context('../assets/img', true);

const VignettePhoto = ({
  src, srcset, title,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.vignette}>
      <div className={classes.background} />
      <div className={classes.content}>
        <picture>
          <source type="image/webp" srcSet={baseUrl(`./${srcset}`)} className={classes.img} />
          <img src={baseUrl(`./${src}`)} alt={title} className={classes.img} />
        </picture>
        {/* <Image src={src} srcset={srcset} alt={title} classe="imgVignetteHome" /> */}
      </div>
    </div>
  );
};

VignettePhoto.propTypes = {
  src: PropTypes.string.isRequired,
  srcset: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VignettePhoto;
