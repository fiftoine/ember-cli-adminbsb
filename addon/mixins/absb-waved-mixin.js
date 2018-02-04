import Mixin from '@ember/object/mixin';

export default Mixin.create({

  sel:null,
  waveClasses:[],

  didInsertElement(){
    this._super(...arguments);
    Waves.attach(this.$(), this.get('waveClasses'));
    Waves.init();
  },


});
