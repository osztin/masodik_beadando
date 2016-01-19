import DS from 'ember-data';

const ingredientModel = DS.Model.extend({
  name: DS.attr('string'),
  food: DS.belongsTo('ingredients')
});

export default ingredientModel;