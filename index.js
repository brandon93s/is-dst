module.exports = exports = (date) => {
  if (typeof date === 'undefined') {
    date = new Date();
  } else if (!(date instanceof Date)) {
    throw new TypeError(`${typeof date} not supported. Expected Date or undefined.`);
  }

  const currentDate = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const standardMonths = [0, 1, 11];
  const savingMonths = [3, 4, 5, 6, 7, 8, 9];

  if (standardMonths.includes(currentMonth)) {
    return false;
  } else if (savingMonths.includes(currentMonth)) {
    return true;
  } else if (currentMonth == 2) {
    let sundayCounter = 0;
    let changeoverDate = 0;
    while (sundayCounter < 2) {
      changeoverDate++;
      let day = (new Date(currentYear, currentMonth, changeoverDate)).getDay();
      if (day == 0) {
        sundayCounter++;
      }
    }
    if (currentDate < changeoverDate) {
      return false;
    } else {
      return true;
    }
  } else {
    let sundayCounter = 0;
    let changeoverDate = 0;
    while (sundayCounter < 1) {
      changeoverDate++;
      let day = (new Date(currentYear, currentMonth, changeoverDate)).getDay();
      if (day == 0) {
        sundayCounter++;
      }
    }
    if (currentDate < changeoverDate) {
      return true;
    } else {
      return false;
    }
  }
}
