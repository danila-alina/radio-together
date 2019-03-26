import { gradientColors } from 'constants/gradientColors';

export const getGradientColor = (str) => {
  const index = parseInt(str, 16) % gradientColors.length;
  return gradientColors[index];
};
