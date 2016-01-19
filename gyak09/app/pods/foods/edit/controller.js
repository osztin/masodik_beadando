import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyFood(formData) {
            console.log(formData);
            var food = this.get('model');
            // food.set('ingredients', formData.ingredients);
            // food.set('description', formData.description);
            food.setProperties(formData);
            return food.save().then(() => {
                this.transitionToRoute('foods.list');
            })
        }
    }
});
