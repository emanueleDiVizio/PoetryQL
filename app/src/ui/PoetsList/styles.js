import { StyleSheet } from 'react-native';
import { Layout } from '../../config/themes/index';

export default StyleSheet.create({
  containerView: {
    ...Layout.overlayView,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: { marginTop: 24 },
  contentContainer: {
    marginTop: '10%',
  },
});

export const itemSize = Layout.screen.height / 6;
