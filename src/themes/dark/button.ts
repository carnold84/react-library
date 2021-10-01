import { neutral, primary, text } from './_colors';
import { primaryFont } from './_typography';

const button = {
  bgColor: neutral.color50,
  borderColor: neutral.color400,
  color: text.color200,
  fontFamily: primaryFont.family,
  fontSize: '1.4rem',
  fontWeight: primaryFont.weight,
  _disabled: {
    bgColor: neutral.color50,
    borderColor: neutral.color400,
    color: text.color400,
  },
  _hover: {
    bgColor: neutral.color50,
    borderColor: neutral.color900,
    color: text.color100,
  },
  _primary: {
    bgColor: primary.color500,
    borderColor: primary.color500,
    color: text.color100,
    _disabled: {
      bgColor: primary.color200,
      borderColor: primary.color200,
      color: text.color100,
    },
    _hover: {
      bgColor: primary.color400,
      borderColor: primary.color400,
      color: text.color100,
    },
  },
};

export default button;
