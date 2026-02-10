import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FundraiserService } from '../../shared/services/fundraiser.service';
import { FundraiserCardComponent } from '../../shared/components/fundraiser-card/fundraiser-card';
import { Fundraiser } from '../../shared/models/fundraiser.model';

@Component({
  selector: 'app-fundraiser-list',
  standalone: true,
  imports: [FormsModule, FundraiserCardComponent],
  template: `
    <div class="bg-gray-50 min-h-screen py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <h1
          class="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-brand-green inline-block pb-2"
        >
          Discover Fundraisers
        </h1>

        <!-- Filters -->
        <div
          class="bg-white rounded-lg shadow-sm p-4 mb-8 flex flex-col md:flex-row gap-4 items-center"
        >
          <div class="flex-1 w-full">
            <label class="sr-only">Search</label>
            <div class="relative">
              <input
                type="text"
                [(ngModel)]="searchQuery"
                placeholder="Search by title, keyword, or name"
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-green focus:border-brand-green"
              />
              <svg
                class="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div class="w-full md:w-48">
            <select
              [(ngModel)]="categoryFilter"
              class="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-lg focus:ring-brand-green focus:border-brand-green bg-white"
            >
              <option value="">All Categories</option>
              <option value="Medical">Medical</option>
              <option value="Emergency">Emergency</option>
              <option value="Education">Education</option>
              <option value="Nonprofit">Nonprofit</option>
              <option value="Animals">Animals</option>
            </select>
          </div>

          <div class="w-full md:w-auto">
            <button
              class="w-full px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-brand-green-dark transition-colors font-semibold shadow-sm"
            >
              Filter
            </button>
          </div>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (fundraiser of filteredFundraisers(); track fundraiser.id) {
            <app-fundraiser-card [fundraiser]="fundraiser"></app-fundraiser-card>
          } @empty {
            <div class="col-span-full text-center py-12 text-gray-500">
              No fundraisers found matching your criteria.
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class FundraiserList {
  private fundraiserService = inject(FundraiserService);

  // Signals for state
  searchQuery = signal('');
  categoryFilter = signal('');
  fundraisers = signal<Fundraiser[]>([]);

  // Computed filtered list
  filteredFundraisers = computed(() => {
    const query = this.searchQuery().toLowerCase();
    const category = this.categoryFilter();

    return this.fundraisers().filter((f) => {
      const matchesSearch =
        f.title.toLowerCase().includes(query) ||
        f.description.toLowerCase().includes(query) ||
        f.organizer.toLowerCase().includes(query);
      const matchesCategory = category ? f.category === category : true;

      return matchesSearch && matchesCategory;
    });
  });

  constructor() {
    this.fundraiserService.getFundraisers().subscribe((data) => {
      this.fundraisers.set(data);
    });
  }
}
