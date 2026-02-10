import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Fundraiser } from '../../models/fundraiser.model';

@Component({
  selector: 'app-fundraiser-card',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  template: `
    <div
      [routerLink]="['/fundraiser', fundraiser.id]"
      class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col group"
    >
      <div class="relative h-48 bg-gray-200">
        <!-- Image Placeholder or actual image -->
        <img
          [src]="fundraiser.image"
          (error)="handleImageError($event)"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          [alt]="fundraiser.title"
        />
        <div
          class="absolute top-2 left-2 bg-brand-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-brand-navy uppercase tracking-wide"
        >
          {{ fundraiser.category }}
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col">
        <h3
          class="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-navy transition-colors"
        >
          {{ fundraiser.title }}
        </h3>

        <p class="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {{ fundraiser.description }}
        </p>

        <div class="mt-auto">
          <!-- Progress Bar -->
          <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2 overflow-hidden">
            <div
              class="bg-brand-green h-2.5 rounded-full"
              [style.width.%]="(fundraiser.raised / fundraiser.goal) * 100"
            ></div>
          </div>

          <div class="flex justify-between items-baseline mb-1">
            <span class="text-brand-green font-bold text-lg">{{
              fundraiser.raised | currency: 'USD' : 'symbol' : '1.0-0'
            }}</span>
            <span class="text-gray-500 text-xs"
              >raised of {{ fundraiser.goal | currency: 'USD' : 'symbol' : '1.0-0' }} goal</span
            >
          </div>

          <div class="text-xs text-brand-pewter font-medium flex items-center">
            <svg class="w-3 h-3 mr-1 text-brand-champagne" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            {{ fundraiser.donors }} donations
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
})
export class FundraiserCardComponent {
  @Input({ required: true }) fundraiser!: Fundraiser;

  handleImageError(event: any) {
    event.target.src = 'https://placehold.co/600x400';
  }
}
