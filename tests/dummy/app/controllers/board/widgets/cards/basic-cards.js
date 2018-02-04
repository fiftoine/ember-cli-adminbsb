import Controller from '@ember/controller';
import RSVP from 'rsvp';
export default Controller.extend({


  actions:{
    reload(){
      var prom = new RSVP.Promise(function(resolve){
        Ember.run.later(function() {
          resolve();
        }, 3000);
      });
      this.set('prom', prom);
    }



  }


});
