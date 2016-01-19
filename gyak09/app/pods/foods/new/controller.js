import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newFood(formData) {
            console.log(formData);
            this.store.createRecord('food', Object.assign({
                date: Date.now().toString(),
                ingredients: 'labor',
                description: 'hiba',
            }, formData));
            this.transitionToRoute('foods.list')
        }
    }
});
