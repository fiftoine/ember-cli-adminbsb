import Component from '@ember/component';
import BootstrapButton from 'ember-bootstrap/components/bs-button';
import AbsbWaved from '../mixins/absb-waved-mixin';
import AbsbTypedClass from '../mixins/absb-typed-class-mixin';


export default BootstrapButton.extend(AbsbWaved,AbsbTypedClass, {
});
