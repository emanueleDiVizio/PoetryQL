import { StyleSheet } from 'react-native';
import { Fonts, Layout } from '../../config/themes/index';

const baseText = {
  color: 'white',
  textAlign: 'center',
};

export default StyleSheet.create({
  overlayContainer: {
    ...Layout.overlayView,
  },

  icon: { position: 'absolute', top: 48, right: 32 },
  topTextContainer: {
    flex: 0,
    marginTop: 48,
    alignItems: 'center',
  },
  authorText: {
    ...Fonts.style.h5,
    ...baseText,
    marginBottom: 8,
  },
  titleText: {
    ...Fonts.style.h6,
    ...baseText,
  },
  poemScrollContainer: {
    flex: 1,
    marginTop: 24,
    alignItems: 'center',
  },
  poemContainer: {
    marginTop: 16,
    marginBottom: 52,
    marginLeft: 24,
    marginRight: 24,
  },
  poemLine: {
    ...baseText,
    ...Fonts.style.description,
    marginBottom: 4,
  },
});
