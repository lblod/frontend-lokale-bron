import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { apps } from 'frontend-lokale-bron/data/apps';
import Fuse from 'fuse.js';

export interface AppsType {
  name: string;
  icon: string;
  description: string;
  link: string;
}

export default class ApplicationService extends Service {
  @tracked applications = apps;
  @tracked isLoading: boolean = false;
  @tracked filteredApps: AppsType[] = [];

  fuse = new Fuse(apps, {
    keys: [
      { name: 'name', weight: 0.7 },
      { name: 'description', weight: 0.3 },
    ],
    threshold: 0.4,
    distance: 500,
  });

  startLoading() {
    this.isLoading = true;
  }

  stopLoading() {
    this.isLoading = false;
  }

  filterApps(searchTerm: string, update: boolean = false): void {
    this.startLoading();
    try {
      if (searchTerm) {
        const results = this.fuse.search(searchTerm.toLowerCase());
        this.filteredApps = results.map((result) => result.item);
        update && (this.applications = this.filteredApps);
      } else {
        this.resetApps();
        this.filteredApps = [];
      }
    } finally {
      this.stopLoading();
    }
  }

  resetApps() {
    this.applications = apps;
  }
}
declare module '@ember/service' {
  interface Registry {
    application: ApplicationService;
  }
}
