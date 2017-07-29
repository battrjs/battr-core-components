import { constants } from '@battr/battr-core';
export const INPUT_TYPE_VALIDATION = {
  text: {
    regex: constants.REGEX.TEXT,
    message: 'Ivalid Text'
  },
  number: {
    regex: constants.REGEX.NUMBER,
    message: 'Ivalid Number'
  },
  email: {
    regex: constants.REGEX.EMAIL,
    message: 'Invalid Email'
  },
  tel: {
    regex: constants.REGEX.PHONE,
    message: 'Invalid Phone Number'
  },
  date: {
    regex: constants.REGEX.DATE,
    message: 'Invalid Date'
  },
  month: {
    regex: constants.REGEX.MONTH,
    message: 'Invalid Month'
  },
  week: {
    regex: constants.REGEX.WEEK,
    message: 'Invalid Week'
  },
  password: {
    regex: constants.REGEX.PASSWORD,
    message: 'Invalid Password'
  },
  'password-strong': {
    regex: constants.REGEX.STRONG_PASSWORD,
    message: 'minimum 8 symbols containing at least 1 number, 1 lower, 1 one upper'
  },
  time: {
    regex: constants.REGEX.TIME,
    message: 'Invalid Time Format'
  },
  url: {
    regex: constants.REGEX.URL,
    message: 'Invalid URl'
  }
};
