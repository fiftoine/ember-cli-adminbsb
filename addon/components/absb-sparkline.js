import Component from '@ember/component';
import {
  observer
} from '@ember/object';

export default Component.extend({

  values:[],

  chartType:'line',
  height:'45px',
  width:'60px',
  lineColor:'#fff',
  fillColor: 'rgba(0,0,0,0)',



  //line
  lineWidth: 1.3,
  spotColor: 'rgba(255,255,255,0.40)',
  spotRadius: 3,
  maxSpotColor: 'rgba(255,255,255,0.40)',
  minSpotColor: 'rgba(255,255,255,0.40)',
  highlightSpotColor: '#fff',

  //pie
  sliceColors: ['rgba(255,255,255,0.70)', 'rgba(255,255,255,0.85)', 'rgba(255,255,255,0.95)', 'rgba(255,255,255,1)'],

  //bar
  barColor: '#fff',
  negBarColor: '#fff',
  barWidth: '4px',

  didInsertElement(){
    this._super(...arguments);
    if(this.get('values')){
      this.sparkline();
    }

  },

  valuesChanged:observer('values', function() {
    console.log("sparkline changed");
    next(this,() => {
        this.sparkline();
    });

  }),




  sparkline(){

    let options = {
      type: this.get('chartType'),
      width: this.get('width'),
      height: this.get('height'),
      lineColor:this.get('lineColor'),
      fillColor: this.get('fillColor'),
    };

    switch (this.get('chartType')) {
      case 'bar':
        options = Object.assign(options, {
          barColor: this.get('barColor'),
          negBarColor: this.get('negBarColor'),
          barWidth: this.get('barWidth'),
        });
        break;
      case 'pie':
        options = Object.assign(options, {
          sliceColors: this.get('sliceColors'),
        });
        break;
      case 'line':
        options = Object.assign(options, {
          lineWidth: this.get('lineWidth'),
          spotColor: this.get('spotColor'),
          maxSpotColor: this.get('maxSpotColor'),
          minSpotColor: this.get('minSpotColor'),
          spotRadius:this.get('spotRadius'),
          highlightSpotColor: this.get('highlightSpotColor'),
        });
        break;
      default:

    }


    this.$().sparkline(this.get('values'), options);



  }

});
