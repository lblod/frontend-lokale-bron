import { action } from '@ember/object';
import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface SearchArgs {
  apps: AppsType[];
}
interface AppsType {
  name: string;
  icon: string;
  description: string;
  link: string;
}

export default class SearchComponent extends Component<SearchArgs> {
  @tracked searchTerm: string = '';
  @tracked filteredApps: Array<{ name: string }> = [];

  get apps() {
    return this.args.apps || [];
  }

  @action
  updateSearchTerm(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    this.filterApps(input.value);
  }

  filterApps(searchTerm: string) {
    if (searchTerm) {
      this.filteredApps = this.apps.filter((app) =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    } else {
      this.filteredApps = [];
    }
  }

  // Handle selecting an app from the autocomplete list
  @action
  selectApp(app: { name: string }) {
    this.searchTerm = app.name; // Update the search term with the selected app's name
    this.filteredApps = []; // Hide the autocomplete list
    // Optionally trigger a search or navigate to app details page
    console.log('Selected app:', app.name);
  }

  // Trigger search action (can be customized as needed)
  @action
  search() {
    this.searchTerm = this.searchTerm;
    this.filteredApps = [];
  }
}
