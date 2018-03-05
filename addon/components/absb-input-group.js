import Component from '@ember/component';
import AbsbInput from './absb-input';
import { computed, observer } from '@ember/object';
export default AbsbInput.extend({
  classNames:['input-group'],


  beforeIcon:null,
  afterIcon:null,
  beforeText:null,
  afterText:null,

  float:false,


  sizeClass:computed('inputsize', function(){
    return this.get('inputsize')?'input-group-'+this.get('inputsize'):null;
  }),

});
