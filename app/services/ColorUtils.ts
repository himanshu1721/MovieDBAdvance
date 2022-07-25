import {Colors} from '../themes';

interface ColorProps {
  colour: string;
  shadow: string;
}

export const returnColor = (percent: number): ColorProps => {
  if (percent >= 8) {
    return {
      colour: Colors.green,
      shadow: Colors.darkGreen,
    };
  } else if (percent >= 6) {
    return {
      colour: Colors.yellow,
      shadow: Colors.darkYellow,
    };
  } else if (percent >= 4) {
    return {
      colour: Colors.orange,
      shadow: Colors.darkOrange,
    };
  } else {
    return {
      colour: Colors.red,
      shadow: Colors.darkRed,
    };
  }
};
