import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('social');
  this.route('counter');
  this.route('quarterly');
  this.route('resources');
});

export default Router;
