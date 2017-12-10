import { StyleSheet } from 'react-native';
import { Fonts } from '../../../config/themes/index';

export default StyleSheet.create({
  containerView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  text: {
    marginTop: 8,
    color: 'white',
    ...Fonts.style.description,
    textAlign: 'center',
  },
});
