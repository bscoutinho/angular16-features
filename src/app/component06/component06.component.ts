import { Component, computed, signal } from '@angular/core';

const users = [
  { id: 1, name: 'Spiderman' },
  { id: 2, name: 'Hulk' },
  { id: 3, name: 'Wolverine' },
  { id: 4, name: 'Cyclops' },
  { id: 5, name: 'Venom' },
];

@Component({
  selector: 'app-component06',
  templateUrl: './component06.component.html',
  styleUrls: ['./component06.component.scss']
})

// comparisson between component06 and component5 (rxjs and signals)
// SIGNALS Example
export class Component06Component {
  
  readonly firstPage = 1;

  itemsPerPage = 3;

  searchInput = signal('');
  currentPage = signal(this.firstPage);

  paginatedAndFilteredUsers = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return users
      .filter((user) =>
        user.name.toLowerCase().includes(this.searchInput().toLowerCase())
      )
      .slice(startIndex, endIndex);
  });

  searchUser(searchText: string): void {
    this.searchInput.set(searchText);
    if (this.currentPage() > this.firstPage) {
      this.currentPage.set(this.firstPage);
    }
  }

  goToPrevPage(): void {
    this.currentPage.update((currentPage) => Math.max(currentPage - 1, 1));
  }

  goToNextPage(): void {
    this.currentPage.update((currentPage) =>
      Math.min(currentPage + 1, this.itemsPerPage + 1)
    );
  }
}
