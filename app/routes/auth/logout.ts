import Route from '@ember/routing/route';

import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import type MockUserSessionService from 'frontend-lokale-bron/services/mock-user-session';

export default class AuthLogoutRoute extends Route {
  @service mockUserSession!: MockUserSessionService;
  @service router!: RouterService;
  beforeModel(): void {
    this.mockUserSession.logout();
    this.router.transitionTo('login'); // Redirect to the login route or another route as desired
  }
}
