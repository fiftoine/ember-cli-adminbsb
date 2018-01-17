import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
  tagName: 'aside',
  classNames: ['right-sidebar'],
  classNameBindings: ['open'],
  open:false,
  dashboard:service(),

  didInsertElement() {
    this._super(...arguments);



    this.get('dashboard').on('toggleRightSidebar', this, 'toggleRightSidebar');


    $(window).click( (e) => {
      var $target = $(e.target);
      if (e.target.nodeName.toLowerCase() === 'i') { $target = $(e.target).parent(); }


      if (!$target.hasClass('js-right-sidebar') && this.get('open') && $target.parents('#rightsidebar').length === 0) {

          this.set('open', false);

      }
    });
  },

  toggleRightSidebar(){
    this.toggleProperty('open');
  }


});
