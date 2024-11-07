import { action } from '@ember/object';
import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type MockUserSessionService from 'frontend-lokale-bron/services/mock-user-session';

export default class MockLoginForm extends Component {
  @service router!: RouterService;
  @service mockUserSession!: MockUserSessionService;
  @tracked errorMessage: string = '';

  @action
  submitForm(event: Event): void {
    event.preventDefault();
    if (!event.target) return;
    const form = event.target as HTMLFormElement;
    const nickname =
      form.querySelector<HTMLInputElement>('#nickname')?.value || '';
    const password =
      form.querySelector<HTMLInputElement>('#password')?.value || '';
    if (nickname === 'user' && password === 'password') {
      this.errorMessage = '';
      this.mockUserSession.login(nickname);
      this.router.transitionTo('/overview');
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }
}
