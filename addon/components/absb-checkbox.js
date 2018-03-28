import Component from '@ember/component';
import { computed, observer } from '@ember/object';

export default Component.extend({

  classNames:['cb-group'],
  classNameBindings:['clear:cb-group-clear', 'group:form-group'],
  checked:false,
  _checked:false,
  disabled:false,
  tabindex:null,
  indeterminate:null,
  name:null,
  autofocus:null,
  form:null,

  group:false,

  filled:false,
  clear:false,
  type:null,

  cbClass:computed('filled', function(){
    let filled =  this.get('filled')?'filled-in ':'';
    let color = this.get('type')?'chk-col-'+this.get('type')+' ':'';
    return filled+color;
  }),

  didInsertElement(){
    this._super(...arguments);
  },

  innerValueChanged:observer('_checked', function(){
    if(this.get('changeset')){
        if(this.get('changeset').get(this.get('property')) !== this.get('_checked')){
            this.get('changeset').set(this.get('property'), this.get('_checked'));
        }
    }else{
      if(this.get('checked') !== this.get('_checked')){
        this.sendAction('onChange', this.get('_checked'));
      }
    }



  }),

  valueChanged:observer('checked', function(){
    this.set('_checked', this.get('checked'));
  }),

  init() {
    this._super(...arguments);
    if(this.get('changeset')){
      this.addObserver(`changeset.${this.get('property')}`,this, 'changeSetChanged');
      this.changeSetChanged();
    }
  },

  changeSetChanged(){
    this.set('_checked', this.get('changeset').get(this.get('property')));
  },



  changeset:null,
  property:null,

});
