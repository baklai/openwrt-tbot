const moment = require("moment");
moment.locale("ru");

truncateMsg = (str, length, ending = "...") => {
  if (str.length > length) {
    return str.substring(0, length) + ending;
  } else {
    return str;
  }
};

dateToString = (date) => {
  return moment(date).format("lll");
};

dateVKToString = (date) => {
  return moment(date * 1000).format("lll");
};

objToJSON = (obj = {}) => {
  return JSON.stringify(obj, null, 2);
};

lowerFirstLetter = (str) => {
  if (str.length > 0) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  } else {
    return str;
  }
};

module.exports = {
  truncateMsg,
  dateToString,
  dateVKToString,
  objToJSON,
  lowerFirstLetter,
};
