import { StyleSheet } from 'react-native';
import { Layout } from '../../config/themes/index';

export default StyleSheet.create({
  blurView: {
    ...Layout.overlayView,
  },
  image: {
    ...Layout.fullScreen,
  },
});
