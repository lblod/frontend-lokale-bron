import { action } from '@ember/object';
import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class MockLoginForm extends Component {
  @service router!: RouterService;
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
      this.router.transitionTo('/overview');
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }
}
