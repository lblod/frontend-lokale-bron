import Controller from '@ember/controller';
import { service } from '@ember/service';
import type MockUserSessionService from 'frontend-lokale-bronnen/services/mock-user-session';

const apps = [
  {
    name: 'Validatie Tool',
    icon: 'user-check',
    description:
      'Een tool voor het valideren van een agenda, besluitenlijst of notulen.',
    link: 'https://www.vlaanderen.be/nl',
  },
  {
    name: 'Data monitoring tool',
    icon: 'archive',
    description:
      'Een tool die vertegenwoordigers van lokale overheden, softwareleveranciers en ABB (het agentschap) informeert over de kwaliteit van de gegevens die door lokale overheden worden gepubliceerd.',
    link: 'https://www.vlaanderen.be/nl',
  },
];

export default class OverviewController extends Controller {
  @service mockUserSession!: MockUserSessionService;

  get username(): string | null {
    return this.mockUserSession.getNickname();
  }

  get isAuthenticated(): boolean {
    return this.mockUserSession.isLoggedIn();
  }
  get apps() {
    return apps;
  }
}
