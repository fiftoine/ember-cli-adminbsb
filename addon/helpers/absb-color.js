import { helper } from '@ember/component/helper';
import {colors } from 'ember-adminbsb/constants';
import ColorUtils from 'ember-adminbsb/utils/colors';

export function absbColor(params/*, hash*/) {
  let [color, opacity] = params;
  
  if(opacity != null){
    return ColorUtils.hexToRgba(colors[color], opacity);
  }else{
    return ColorUtils.nametoHex(color);
  }

}

export default helper(absbColor);
