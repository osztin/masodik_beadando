import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newIngredient(formData) {
            console.log(formData);
            var ingredient = this.store.createRecord(
                'ingredient', 
                Object.assign(
                    {
                        name: 'ingredient',
                    },
                    formData
                )
            );
            ingredient.save();
        }
    }
});