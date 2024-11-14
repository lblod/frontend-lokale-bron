import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { AppsType } from 'frontend-lokale-bron/services/application';
import type ApplicationService from 'frontend-lokale-bron/services/application';

export default class SearchComponent extends Component<{}> {
  @service application!: ApplicationService;
  @tracked searchTerm: string = '';
  @tracked selectedIndex: number = -1;
  @tracked isDropdownFocused: boolean = false;

  @action
  updateSearchTerm(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    this.application.filterApps(this.searchTerm);
  }

  @action
  selectApp(selectedApp: AppsType): void {
    this.searchTerm = selectedApp.name;
    this.application.filterApps(this.searchTerm, true);
    this.resetFilteredApps();
  }

  @action
  resetFilteredApps(): void {
    this.application.filteredApps = [];
    this.selectedIndex = -1;
  }
  @action
  search(): void {
    this.application.filterApps(this.searchTerm, true);
    this.resetFilteredApps();
  }
  @action
  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      if (
        this.selectedIndex >= 0 &&
        this.application.filteredApps[this.selectedIndex]
      ) {
        this.selectApp(
          this.application.filteredApps[this.selectedIndex] as AppsType,
        );
      } else {
        this.search();
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.selectNextApp();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.selectPreviousApp();
    }
  }

  @action
  selectNextApp(): void {
    if (this.selectedIndex < this.application.filteredApps.length - 1) {
      this.selectedIndex++;
      this.scrollToSelected();
    }
  }

  @action
  selectPreviousApp(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.scrollToSelected();
    }
  }

  @action
  onFocus(): void {
    this.application.filterApps(this.searchTerm);
  }

  @action
  onBlur(): void {
    if (!this.isDropdownFocused) {
      setTimeout(() => {
        this.resetFilteredApps();
      }, 100);
    }
    this.isDropdownFocused = false;
  }

  @action
  onDropdownClick(): void {
    this.isDropdownFocused = true;
  }

  @action
  scrollToSelected(): void {
    const dropdown = document.querySelector('.autocomplete-dropdown ul');
    const selectedItem = dropdown?.children[this.selectedIndex];

    if (selectedItem) {
      selectedItem.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }
}
