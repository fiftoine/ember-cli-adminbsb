import Component from '@ember/component';
import BootstrapDropDownButton from 'ember-bootstrap/components/bs-dropdown/button';
import AbsbWaved from '../mixins/absb-waved-mixin';
import AbsbTypedClass from '../mixins/absb-typed-class-mixin';


export default BootstrapDropDownButton.extend(AbsbWaved,AbsbTypedClass, {
});
