import { allowOnlyDigitsAndDot } from '@/helpers';

export default function sanitizeToFiveDigitsDecimal(value) {
  const cleanedValue = allowOnlyDigitsAndDot(value);
  const [integerPart, decimalPart] = cleanedValue.split('.');

  return decimalPart !== undefined ? `${integerPart}.${decimalPart.slice(0, 5)}` : integerPart;
}
