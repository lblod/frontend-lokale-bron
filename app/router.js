import EmberRouter from '@ember/routing/router';
import config from 'frontend-lokale-bron/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('overview');

  this.route('auth', function () {
    this.route('logout');
  });
});
