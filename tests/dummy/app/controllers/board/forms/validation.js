import Controller from '@ember/controller';
import {
  validatePresence,
  validateLength,
  validateConfirmation,
  validateFormat,
  validateNumber
} from 'ember-changeset-validations/validators';
import validateBoolean from '../../../validators/boolean';
export default Controller.extend({

  model1:{},

  validationForm1:{
    name:[validatePresence(true)],
    surname:validatePresence(true),
    email:validateFormat({ type: 'email' }),
    password:[validatePresence(true), validateLength({ min: 8 })],
    description:validatePresence(true),
    gender:validatePresence(true),
    terms:validateBoolean(true)
  },

  model2:{},

  validationForm2:{
    minmaxlength:[validatePresence(true), validateLength({ min: 3, max:10})],
    minmaxvalue:[validatePresence(true),validateNumber({ gte: 10, lte:200 })],
    url:[validatePresence(true),validateFormat({ type: 'url' })],
    date:[validatePresence(true),validateFormat({ type:'date', format:'YYYY-MM-DD' })],
    url:[validatePresence(true),validateFormat({ type: 'url' })],
    number:[validatePresence(true),validateNumber()],
    creditcard:[validatePresence(true),validateFormat( {regex: /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/ })]
  },

  actions:{
    validateForm(changeset){
      console.log('validation');
      changeset.validate();


    }
  }


});
