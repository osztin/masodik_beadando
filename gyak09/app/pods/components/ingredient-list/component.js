import Ember from 'ember';

export default Ember.Component.extend({
    ingredients: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                name: this.$('#name').val(),
            });
        }
    },
    
    validate() {
        return true;
    }
    
});