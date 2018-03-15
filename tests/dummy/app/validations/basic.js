import {
  validatePresence,
  validateLength,
  validateConfirmation,
  validateFormat
} from 'ember-changeset-validations/validators';


export default {
  name: [
    validatePresence(true),
    validateLength({ min: 4 })
  ]

};
