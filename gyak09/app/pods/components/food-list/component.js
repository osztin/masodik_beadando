import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteFood(food) {
            food.deleteRecord();
            food.save();
        }
    }
});
