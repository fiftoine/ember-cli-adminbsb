import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  notify:service('absb-notify'),


  actions:{

    notify(text, colorName, placementFrom, placementAlign, animateEnter, animateExit){

      this.get('notify').showNotification(text, colorName, placementFrom, placementAlign, animateEnter, animateExit);


    }


  }



});
