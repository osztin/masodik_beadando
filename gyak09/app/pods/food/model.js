import DS from 'ember-data';

const FoodModel = DS.Model.extend({
  ingredients: DS.hasMany('ingredient'),
  description: DS.attr('string'),
});

export default FoodModel;