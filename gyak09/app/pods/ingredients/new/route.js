import Ember from 'ember';

export default Ember.Route.extend({
    model(food) {
        return this.store.find('ingredient', food);
    },
});
