import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  ingredients: config.ingredientsType
});

Router.map(function() {
  this.route('foods', function() {
    this.route('list');
    this.route('new');
    this.route('edit', {path: '/edit/:food_id'});
  });
  this.route('ingredients', function() {
    this.route('list', { path:'/list/:food_id'});
    this.route('new');
  });
});

export default Router;
