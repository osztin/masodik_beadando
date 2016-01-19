import Ember from 'ember';

export default Ember.Component.extend({
    foods: Ember.Object.create(),
    hasFoods: false,
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
            // this.sendAction('onSave', {
                ingredients: this.$('#helyszin').val(),
                description: this.$('#leiras').val(),
            });
        }
    },
    
    validate() {
        var ingredients = this.$('#helyszin').val();
        var description = this.$('#leiras').val();
        
        this.set('foods.ingredients', ingredients === '' ? 'Név kötelező' : '');
        this.set('foods.description', description === '' ? 'Leírás kötelező' : '');

        return this.get('foods.ingredients') === '' &&
               this.get('foods.description') === '';
    }
});
