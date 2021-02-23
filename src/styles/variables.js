import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const dimensions = {
  width,
  height,
};

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
};

// export const fonts = {
//   rubik_black: {fontFamily: 'Rubik-Black'},
//   rubik_blackItalic: {fontFamily: 'Rubik-BlackItalic'},
//   rubik_bold: {fontFamily: 'Rubik-Bold'},
//   rubik_boldItalic: {fontFamily: 'Rubik-BoldItalic'},
//   rubik_Italic: {fontFamily: 'Rubik-Italic'},
//   rubik_Light: {fontFamily: 'Rubik-Light'},
//   rubik_LightItalic: {fontFamily: 'Rubik-LightItalic'},
//   rubik_medium: {fontFamily: 'Rubik-Medium'},
//   rubik_mediumItalic: {fontFamily: 'Rubik-MediumItalic'},
//   rubik_regular: {fontFamily: 'Rubik-Regular'},
// };
