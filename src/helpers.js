function deleteSpacesWithinString(value) {
  return value.split(' ').join('');
}

function firstDigitGroupHasOneDigit(value) {
  return value.split(' ')[0].length === 1;
}

function allowOnlyDigitsAndDot(value) {
  return value.replace(/[^0-9,.]/g, '').replace(/,/g, '.');
}

function removeLeadingZeros(value) {
  return value.replace(/^0+/, '');
}

function removeLeadingAndTrailingZeros(value) {
  if (parseFloat(value) === 0) {
    return '0';
  }

  return value.replace(/^0+|(\.\d*?[1-9])0+$|\.(0+)?$/g, '$1').replace(/^\./, '0.');
}

export {
  deleteSpacesWithinString,
  firstDigitGroupHasOneDigit,
  allowOnlyDigitsAndDot,
  removeLeadingZeros,
  removeLeadingAndTrailingZeros,
};
