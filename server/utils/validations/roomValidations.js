const validator = require('validator');

const validateNewRoomCreation = ({name}) => {
  let errors = {};

  if (validator.isEmpty(name)) {
    errors.name = 'Room name field is required';
  }

  return {
    errors,
    isValid: !Object.keys(errors).length
  };
};

module.exports = { validateNewRoomCreation };
