import Mixin from '@ember/object/mixin';
import { computed, observer } from '@ember/object';

export default Mixin.create({
  classNames:['form-group'],
  classNameBindings:['float:form-float', 'sizeClass'],

  float:true,
  label:'',
  disabled:false,

  inputsize:null,

  value:null,

  
  placeholder:computed('float', 'label', function(){
    return this.get('float')?'':this.get('label')
  }),
  sizeClass:computed('inputsize', function(){
    return this.get('inputsize')?'form-group-'+this.get('inputsize'):null;
  }),

  didInsertElement(){
    this._super(...arguments);
    this.$('.form-control').focus(function () {
        $(this).parent().addClass('focused');
    });

    this.$('.form-control').focusout(function () {
        var $this = $(this);
        if ($this.parents('.form-group').hasClass('form-float')) {
            if ($this.val() == '') { $this.parents('.form-line').removeClass('focused'); }
        }
        else {
            $this.parents('.form-line').removeClass('focused');
        }
    });

    this.$('.form-label').on('click', ()=>{
      this.$('input').focus();
    });
  },

  valueChanged:observer('value', function(){
    if (this.get('value') !== '') {
        this.$('.form-line').addClass('focused');
    }
  })
});
