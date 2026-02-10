import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-50 text-gray-700 py-16 border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12">
          <!-- Company Info -->
          <div class="md:col-span-4">
            <div class="flex items-center gap-2 mb-6">
              <div
                class="bg-brand-green p-1.5 rounded-lg text-white shadow-lg shadow-brand-green/20"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div class="text-xl font-black tracking-tighter">
                <span class="text-brand-green">Raise</span
                ><span class="text-brand-pewter uppercase italic tracking-tighter">Now</span>
              </div>
            </div>
            <p class="text-gray-500 leading-relaxed mb-8 max-w-sm">
              Empowering individuals and communities to reach their goals through transparent,
              secure, and impactful social fundraising.
            </p>
            <div class="flex items-center gap-4">
              <a
                href="#"
                class="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white hover:shadow-lg transition-all"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.248h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white hover:shadow-lg transition-all"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84a4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white hover:shadow-lg transition-all"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.299 1.636.5 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.299-.765.5-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.299-1.636-.5-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07s-3.585-.015-4.85-.074c-1.17-.061-1.805-.256-2.227-.421a3.877 3.877 0 01-1.382-.899 3.79 3.79 0 01-.896-1.38c-.164-.42-.359-1.065-.413-2.235-.057-1.274-.07-1.649-.07-4.859s.015-3.585.074-4.85c.061-1.17.256-1.805.421-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.883 0 1.441 1.441 0 012.883 0z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Links Sections -->
          <div class="md:col-span-2">
            <h3 class="text-sm font-black uppercase tracking-widest text-gray-900 mb-6">
              Fundraise
            </h3>
            <ul class="space-y-4">
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-brand-green transition-colors font-medium"
                  >Medical</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-brand-green transition-colors font-medium"
                  >Emergency</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-brand-green transition-colors font-medium"
                  >Education</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-brand-green transition-colors font-medium"
                  >Nonprofit</a
                >
              </li>
            </ul>
          </div>

          <div class="md:col-span-2">
            <h3 class="text-sm font-black uppercase tracking-widest text-gray-900 mb-6">Company</h3>
            <ul class="space-y-4">
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-brand-green transition-colors font-medium"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-brand-green transition-colors font-medium"
                  >Careers</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-brand-green transition-colors font-medium"
                  >Press Center</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-brand-green transition-colors font-medium"
                  >Impact Reports</a
                >
              </li>
            </ul>
          </div>

          <div class="md:col-span-2">
            <h3 class="text-sm font-black uppercase tracking-widest text-gray-900 mb-6">Support</h3>
            <ul class="space-y-4">
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-brand-green transition-colors font-medium"
                  >Help Center</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-brand-green transition-colors font-medium"
                  >How it works</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-brand-green transition-colors font-medium"
                  >Pricing</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-brand-green transition-colors font-medium"
                  >Safety</a
                >
              </li>
            </ul>
          </div>

          <div class="md:col-span-2">
            <h3 class="text-sm font-black uppercase tracking-widest text-gray-900 mb-6">Legal</h3>
            <ul class="space-y-4">
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-brand-green transition-colors font-medium"
                  >Privacy Policy</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-brand-green transition-colors font-medium"
                  >Terms of Service</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-brand-green transition-colors font-medium"
                  >Cookie Policy</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="mt-12 border-t border-gray-100 pt-8 text-sm text-center text-gray-400 font-medium"
        >
          &copy; 2026 RaiseNow. Portfolio purpose only. Not a real service.
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
