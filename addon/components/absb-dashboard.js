import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({

  classNameBindings: ['lsClosed', 'overlayOpen'],
  windowResize: service(),
  dashboard:service(),
  lsClosed:true,
  overlayOpen:false,

  rightSideBarOpen:false,

  didInsertElement() {
    this._super(...arguments);


    this.get('dashboard').on('toggleLeftSidebar', this, 'toggleLeftSidebar');
    this.get('dashboard').on('toggleRightSidebar', this, 'toggleRightSidebar');


    this.get('windowResize').on('didResize', () => {
      this.checkStatuForResize(false);
    });
    var $body = $('body');
    $body.find('.content, .sidebar').addClass('no-animate').delay(1000).queue(function () {
        $(this).removeClass('no-animate').dequeue();
    });
    this.checkStatuForResize(true);

    $(window).click( (e) => {
      var $target = $(e.target);
      if (e.target.nodeName.toLowerCase() === 'i') { $target = $(e.target).parent(); }

      if (!$target.hasClass('bars') && this.get('overlayOpen') && $target.parents('#leftsidebar').length === 0) {
          if (!$target.hasClass('js-right-sidebar')) {
            this.$('.overlay').fadeOut();


          }
          this.set('overlayOpen', false);
      }

      if (!$target.hasClass('js-right-sidebar') && this.get('rightSideBarOpen') && $target.parents('#rightsidebar').length === 0) {
          if (!$target.hasClass('bars')){
            this.$('.overlay').fadeOut();

          }
          this.set('rightSideBarOpen', false);

      }
    });


    var height = ($(window).height() - ($('.legal').outerHeight() + $('.user-info').outerHeight() + $('.navbar').innerHeight()));
    this.set('menuHeight',height);

    var rightListHeight  = $(window).height() - ($('.navbar').innerHeight() + $('.nav-tabs').outerHeight());
    this.set('rightListHeight', rightListHeight);



  },



  willDestroyElement: function() {

    this._super(...arguments);

    this.get('dashboard').off('toggleLeftSidebar', this, 'toggleLeftSidebar');
    this.get('dashboard').off('toggleRightSidebar', this, 'toggleRightSidebar');
  },


  toggleLeftSidebar(){
    this.toggleProperty('overlayOpen');
    if(this.get('overlayOpen')){
      this.$('.overlay').fadeIn();
    }else{
      this.$('.overlay').fadeOut();
    }
  },

  toggleRightSidebar(){
    this.toggleProperty('rightSideBarOpen');
    if(this.get('rightSideBarOpen')){
      this.$('.overlay').fadeIn();
    }else{
      this.$('.overlay').fadeOut();
    }
  },



  checkStatuForResize(){
    var $body = $('body');
    var width = $body.width();

    if (width < 1170){
      this.set('lsClosed', true);
    }else{
      this.set('lsClosed', false);
    }
  },

  actions:{
    toggleOverlayOpen(){


    }
  }


});
