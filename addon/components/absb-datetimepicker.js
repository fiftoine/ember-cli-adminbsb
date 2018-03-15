import Component from '@ember/component';
import FormControlMixin from 'ember-adminbsb/mixins/form-control-mixin';
import { computed, observer } from '@ember/object';
import { copy } from '@ember/object/internals';
import { schedule} from '@ember/runloop';

export default Component.extend(FormControlMixin,{

  _value:null,

  format:computed('date', 'time',function(){
    return (this.get('date')?'DD/MM/YYYY ':'') + (this.get('time')?'HH:mm':'');
  }),
  shortTime:false,
  year:true,
  date:true,
  disabledDays:null,
  time:true,
  clearButton:true,
  nowButton:true,
  switchOnClick:false,
  cancelText:'Cancel',
  okText:'Ok',
  clearText:'Clear',
  nowText:'Now',
  triggerEvent:'focus',
  monthPicker:false,


  minDate:null,
  maxDate:null,

  _options:computed(function(){
      return {
        format:this.get('format'),
        shortTime:this.get('shortTime'),
        year:this.get('year'),
        date:this.get('date'),
        disabledDays:this.get('disabledDays'),
        time:this.get('time'),
        clearButton:this.get('clearButton'),
        nowButton:this.get('nowButton'),
        switchOnClick:this.get('switchOnClick'),
        cancelText:this.get('cancelText'),
        okText:this.get('okText'),
        clearText:this.get('clearText'),
        nowText:this.get('nowText'),
        triggerEvent:this.get('triggerEvent'),
        monthPicker:this.get('monthPicker'),
        currentDate:this.get('value'),
        minDate:this.get('minDate'),
        maxDate:this.get('maxDate')
      }
  }).volatile(),

  didInsertElement(){
    this._super(...arguments);
    this.$('input').bootstrapMaterialDatePicker(this.get('_options')).on('change', function(e, date){
      this.dateTimeChanged(date);
    }.bind(this));
    if (this.get('value') !== null) {
        this.$('.form-line').addClass('focused');
    }else{
        this.$('.form-line').removeClass('focused');
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$('input').bootstrapMaterialDatePicker('destroy');
  },

  onChange() {},

  dateTimeChanged(date){
    console.log('Date changed : '+date);
    let newValue = copy(this.get('value'));

    if (newValue !== date) {
      newValue = date;
    }

    this.get('onChange')(newValue);
  },



  minDateChanged:observer('minDate', function(){
    schedule('afterRender', () => {
      this.$('input').bootstrapMaterialDatePicker('setMinDate', this.get('minDate'));
    });
  }),
  maxDateChanged:observer('maxDate', function(){
    schedule('afterRender', () => {
      this.$('input').bootstrapMaterialDatePicker('setMaxDate', this.get('maxDate'));
    });
  }),

  valueChanged:observer('value', function(){
    console.log('Value changed : ', this.get('value'));
    if (this.get('value') !== null) {
        this.$('.form-line').addClass('focused');
    }else{
        this.$('.form-line').removeClass('focused');
    }
    schedule('afterRender', () => {
      this.$('input').bootstrapMaterialDatePicker('setDate', this.get('value'));
    });
  }),





});
