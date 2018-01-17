import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
  classNames: ['search-bar'],
  classNameBindings : ['open'],

  dashboard:service(),

  searchTerms:null,


  open:false,


  didInsertElement() {
    this._super(...arguments);
    this.get('dashboard').on('displaySearch', this, 'displaySearch');
  },

  displaySearch(){
    this.set('open',true);
    this.$('input[type="text"]').focus();
  },

  actions:{
    closeSearch(){
      this.set('open',false);
      this.set('searchTerms', '');
    },

    searchKeyUp(e){
      if (e.keyCode == 27) {
        this.set('open',false);
        this.set('searchTerms', '');
      }else if(e.keyCode == 13){
        this.sendAction('onSearch', this.get('searchTerms'));
      }
    }
  }
});
