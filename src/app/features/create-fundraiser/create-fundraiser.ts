import { Component } from '@angular/core';

@Component({
  selector: 'app-create-fundraiser',
  standalone: true,
  template: `
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-brand-navy">
          Start your fundraiser
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          This is a demo page. Functionality not implemented.
        </p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700">Where do you live?</label>
              <div class="mt-1">
                <input
                  type="text"
                  disabled
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-navy focus:border-brand-navy sm:text-sm bg-gray-50"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"
                >What are you fundraising for?</label
              >
              <div class="mt-1">
                <select
                  disabled
                  class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-navy focus:border-brand-navy sm:text-sm rounded-md bg-gray-50"
                >
                  <option>Medical</option>
                  <option>Emergency</option>
                </select>
              </div>
            </div>

            <div>
              <button
                disabled
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-navy hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-navy disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CreateFundraiser {}
