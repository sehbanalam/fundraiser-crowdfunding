import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="bg-brand-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a
              routerLink="/"
              class="text-2xl font-black tracking-tighter flex items-center gap-1 group"
            >
              <div
                class="bg-brand-green p-1.5 rounded-lg text-white shadow-lg shadow-brand-green/30 group-hover:scale-110 transition-transform"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div class="group-hover:opacity-90 transition-opacity">
                <span class="text-brand-green">Raise</span
                ><span class="text-brand-pewter uppercase italic tracking-tighter">Now</span>
              </div>
            </a>
          </div>

          <!-- Search Bar (Desktop) -->
          <div class="hidden md:flex flex-1 items-center justify-center px-8">
            <div class="relative w-full max-w-md">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-brand-navy focus:border-brand-navy sm:text-sm"
                placeholder="Search for fundraisers"
              />
            </div>
            <a
              routerLink="/search"
              class="ml-4 text-sm font-medium text-gray-700 hover:text-brand-green"
              >Search</a
            >
          </div>

          <!-- Right Links -->
          <div class="hidden md:flex items-center space-x-6">
            <a href="#" class="text-brand-navy font-medium hover:text-brand-navy/80"
              >For individuals</a
            >
            <a href="#" class="text-brand-navy font-medium hover:text-brand-navy/80"
              >For charities</a
            >

            <a href="#" class="text-brand-navy font-medium hover:text-brand-navy/80">Sign in</a>

            <a
              routerLink="/create"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-green hover:bg-brand-green-dark transition-colors"
            >
              Raise Now
            </a>
          </div>

          <!-- Mobile menu button -->
          <div class="flex items-center md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-navy"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {}
