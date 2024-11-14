import Route from '@ember/routing/route';
import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import type MockUserSessionService from 'frontend-lokale-bron/services/mock-user-session';

export default class OverviewRoute extends Route {
  @service mockUserSession!: MockUserSessionService;
  @service router!: RouterService;
  async beforeModel() {
    if (!this.mockUserSession.isLoggedIn()) {
      this.router.transitionTo('logout');
    }
  }
}
