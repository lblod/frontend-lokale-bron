import Route from '@ember/routing/route';
import RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import type MockUserSessionService from 'frontend-lokale-bron/services/mock-user-session';

export default class ApplicationRoute extends Route {
  @service session!: any;
  @service mockUserSession!: MockUserSessionService;
  @service router!: RouterService;

  async beforeModel() {
    await this.session.setup();
    if (this.mockUserSession.isLoggedIn()) {
      this.router.transitionTo('overview');
    } else {
      this.router.transitionTo('login');
    }
  }
}
