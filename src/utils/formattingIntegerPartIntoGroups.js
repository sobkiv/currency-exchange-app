export default function formattingIntegerPartInGroups(value) {
  if (value === '') return '';

  const leadingZeros = value.match(/^(0*)/)[0];
  const [integerPart, decimalPart] = value.split('.');

  const bigIntPart = BigInt(integerPart);
  const groupedIntegerPart = bigIntPart.toLocaleString();

  return decimalPart !== undefined
    ? `${leadingZeros}${groupedIntegerPart !== '0' ? groupedIntegerPart : ''}.${decimalPart}`
    : `${leadingZeros}${groupedIntegerPart !== '0' ? groupedIntegerPart : ''}`;
};