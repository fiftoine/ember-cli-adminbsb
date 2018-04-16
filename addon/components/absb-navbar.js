import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
  tagName: 'nav',
  classNames: ['navbar'],
  collapsed:true,

  withRightSideBar:true,

  dashboard:service(),

  noLeftMenu:false,
  noSearch:false,


  didInsertElement() {

    this.get('windowResize').on('didResize', () => {
      this.checkStatuForResize(false);
    });
    this.checkStatuForResize(true);


  },
  checkStatuForResize(){
    var $body = $('body');
    var width = $body.width();

    if (width < 1170){
      this.$('.navbar .navbar-header .bars').fadeIn();
    }else{

      this.$('.navbar .navbar-header .bars').fadeOut();
    }
  },

  actions:{
    toggleSidebar(){
      this.set('collapsed', true);
      this.get('dashboard').trigger('toggleLeftSidebar');
      //this.sendAction('toggleSidebar');

    },

    toggleRightSidebar(){
      //this.sendAction('toggleRightSidebar');
      this.set('collapsed', true);
      this.get('dashboard').trigger('toggleRightSidebar');
    },

    displaySearch(){
      this.get('dashboard').trigger('displaySearch');
    },

    titleClick(){
      this.sendAction('onTitleClick');
    }
  }

});
