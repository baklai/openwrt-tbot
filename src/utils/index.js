truncateMsg = (str, length, ending = '...') => {
  if (str.length > length) {
    return str.substring(0, length) + ending;
  } else {
    return str;
  }
};

lowerFirstLetter = (str) => {
  if (str.length > 0) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  } else {
    return str;
  }
};

dateToString = (value) => {
  return new Date(value).toLocaleString();
};

module.exports = {
  truncateMsg,
  lowerFirstLetter,
  dateToString
};
