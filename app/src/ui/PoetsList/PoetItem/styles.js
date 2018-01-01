import { StyleSheet } from 'react-native';
import { Fonts, Layout } from '../../../config/themes/index';


export default StyleSheet.create({
  containerView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8%',
    width: Layout.screen.width / 2,
  },
  text: {
    marginTop: '2%',
    marginLeft: '5%',
    marginRight: '5%',
    color: 'white',
    ...Fonts.style.description,
    textAlign: 'center',
  },
});
