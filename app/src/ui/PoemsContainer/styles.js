import { StyleSheet } from 'react-native';
import { Fonts, Layout } from '../../config/themes/index';

const baseText = {
  color: 'white',
  textAlign: 'center',
};

export default StyleSheet.create({
  overlayContainer: {
    ...Layout.overlayView,
    top: 24,
  },

  icon: {
    position: 'absolute', top: 24, right: 24, backgroundColor: 'transparent',
  },
  topTextContainer: {
    flex: 0,
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
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
    marginTop: '5%',
    alignItems: 'center',
  },
  poemContainer: {
    ...Layout.fulllWidth,
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  poemLine: {
    ...baseText,
    ...Fonts.style.description,
    marginBottom: 6,
  },
});
