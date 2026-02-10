import { Component, inject } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FundraiserService } from '../../shared/services/fundraiser.service';
import { Fundraiser } from '../../shared/models/fundraiser.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-fundraiser-detail',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  template: `
    <div class="bg-gray-50 min-h-screen py-10">
      @if (fundraiser(); as data) {
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="md:flex">
              <!-- Left Column: Image and Description -->
              <div class="md:w-2/3">
                <div class="h-96 bg-gray-200 relative">
                  <img
                    [src]="data.image"
                    (error)="handleImageError($event)"
                    class="w-full h-full object-cover"
                    [alt]="data.title"
                  />
                  <div
                    class="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-md text-sm backdrop-blur-sm"
                  >
                    <span class="font-semibold">Created {{ data.created_at | date }}</span>
                    <span class="mx-2">•</span>
                    <span>{{ data.location }}</span>
                  </div>
                </div>

                <div class="p-8">
                  <div class="flex items-center mb-6">
                    <div
                      class="h-12 w-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-xl mr-4"
                    >
                      {{ data.organizer.charAt(0) }}
                    </div>
                    <div>
                      <p class="text-sm text-gray-500 uppercase tracking-wide font-semibold">
                        Organizer
                      </p>
                      <p class="text-lg font-medium text-gray-900">{{ data.organizer }}</p>
                    </div>
                  </div>

                  <h2 class="text-3xl font-bold text-gray-900 mb-6">About this fundraiser</h2>
                  <div class="prose prose-lg text-gray-700 max-w-none">
                    <p class="whitespace-pre-line">{{ data.description }}</p>
                  </div>

                  <div class="mt-12 pt-8 border-t border-gray-100">
                    <h3 class="text-xl font-bold text-gray-900 mb-4">
                      Words of support ({{ data.donors }})
                    </h3>
                    <p class="text-gray-500 italic">Please donate to share words of support.</p>
                  </div>
                </div>
              </div>

              <!-- Right Column: Sticky Sidebar -->
              <div
                class="md:w-1/3 bg-gray-50/50 border-l border-gray-100 p-8 md:sticky md:top-20 self-start"
              >
                <h1 class="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                  {{ data.title }}
                </h1>

                <div class="mb-6">
                  <div class="flex items-baseline mb-2">
                    <div class="text-2xl font-bold text-brand-green">
                      {{ data.raised | currency: 'USD' : 'symbol' : '1.0-0' }}
                    </div>
                    <span class="text-gray-500 ml-2"
                      >raised of {{ data.goal | currency: 'USD' : 'symbol' : '1.0-0' }} goal</span
                    >
                  </div>

                  <div class="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                    <div
                      class="bg-brand-green h-3 rounded-full"
                      [style.width.%]="(data.raised / data.goal) * 100"
                    ></div>
                  </div>

                  <p class="text-sm text-gray-600 font-medium">{{ data.donors }} donations</p>
                </div>

                <div class="space-y-4">
                  <button
                    class="w-full bg-brand-green text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-brand-green-dark transition-all shadow-lg hover:shadow-xl mb-4"
                    (click)="donate()"
                  >
                    Raise now
                  </button>

                  <button
                    class="w-full py-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold text-lg rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
                  >
                    Share
                  </button>
                </div>

                <div class="mt-8">
                  <div class="flex items-center text-sm text-gray-600 mb-4">
                    <svg
                      class="w-5 h-5 mr-2 text-brand-pewter"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span><strong>124 people</strong> just donated</span>
                  </div>

                  <!-- Mock Donors List -->
                  <ul class="space-y-4">
                    <li class="flex items-start">
                      <div
                        class="h-8 w-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green text-xs font-bold mr-3"
                      >
                        {{ data.organizer.charAt(0) }}
                      </div>
                      <div>
                        <p class="text-sm font-semibold">John Doe</p>
                        <p class="text-xs text-gray-500">Provided a donation of $50</p>
                        <p class="text-xs text-gray-400 mt-1">5 minutes ago</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <div
                        class="h-8 w-8 rounded-full bg-brand-pewter/20 flex items-center justify-center text-brand-navy text-xs font-bold mr-3"
                      >
                        AS
                      </div>
                      <div>
                        <p class="text-sm font-semibold">Anonymous</p>
                        <p class="text-xs text-gray-500">Provided a donation of $100</p>
                        <p class="text-xs text-gray-400 mt-1">25 minutes ago</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      } @else {
        <div class="flex justify-center items-center h-64">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green"></div>
        </div>
      }
    </div>
  `,
})
export class FundraiserDetail {
  private route = inject(ActivatedRoute);
  private fundraiserService = inject(FundraiserService);

  // Use toSignal to reactively get the fundraiser data based on route params
  fundraiser = toSignal(
    this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        return id ? this.fundraiserService.getFundraiserById(id) : [];
      }),
    ),
  );

  handleImageError(event: any) {
    event.target.src = 'https://placehold.co/800x600';
  }

  donate() {
    alert('This is a demo. Donation functionality is not implemented.');
  }
}
