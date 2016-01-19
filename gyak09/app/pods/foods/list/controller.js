import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newFood(formData) {
            console.log(formData);
            var food = this.store.createRecord('food', Object.assign({
                description: 'porkolt',
            }, formData));
            food.save();
            //$('.modal').modal('hide');
        }
    }
});
