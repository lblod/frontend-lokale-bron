import Controller from '@ember/controller';
import { service } from '@ember/service';
import type ApplicationService from 'frontend-lokale-bron/services/application';
import type MockUserSessionService from 'frontend-lokale-bron/services/mock-user-session';

export default class OverviewController extends Controller {
  @service mockUserSession!: MockUserSessionService;
  @service application!: ApplicationService;

  get username(): string | null {
    return this.mockUserSession.getNickname();
  }

  get isAuthenticated(): boolean {
    return this.mockUserSession.isLoggedIn();
  }
}
