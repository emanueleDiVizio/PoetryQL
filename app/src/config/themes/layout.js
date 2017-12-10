import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
  overlayView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
  },
  fullScreen: {
    width,
    height,
  },
  fulllWidth: {
    width,
  },
  fullHeight: { height },
  screen: { width, height },
};
