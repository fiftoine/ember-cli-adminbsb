import Component from '@ember/component';
import {
  observer
} from '@ember/object';

export default Component.extend({


  loading:false,

  effect:'pulse',
  text:'Loading...',
  color:'#000',
  bg: 'rgba(255,255,255,0.90)',

  loadingChanged:observer('loading', function() {
    console.log('waitme loading changed');
    if(this.get('loading') != null && typeof this.get('loading').then === 'function'){
      console.log('loading is promise');
      this.showWaitMe();
      this.get('loading').then((res) =>{
        this.hideWaitMe();
        return res;
      })
    }else{
     console.log('loading is boolean');
      if(this.get('loading') === true){
        console.log('show it');
        this.showWaitMe();
      }else if(this.get('loading') === false){
        console.log('hide it');
        this.hideWaitMe();
      }
    }
  }),


  showWaitMe(){
    this.$().waitMe({
      effect:this.get('effect'),
      text: this.get('text'),
      color:this.get('color'),
      bg:this.get('bg')
    });
  },

  hideWaitMe(){
    this.$().waitMe('hide');
  }




});
