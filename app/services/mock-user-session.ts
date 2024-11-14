import Service from '@ember/service';

export default class MockUserSessionService extends Service {
  private storageKey = 'userSession';

  login(nickname: string): void {
    localStorage.setItem(this.storageKey, JSON.stringify({ nickname }));
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.storageKey) !== null;
  }

  getNickname(): string | null {
    const session = localStorage.getItem(this.storageKey);
    return session ? JSON.parse(session).nickname : null;
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
  }
}
