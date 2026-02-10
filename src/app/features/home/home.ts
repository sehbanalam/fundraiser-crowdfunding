import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FundraiserService } from '../../shared/services/fundraiser.service';
import { FundraiserCardComponent } from '../../shared/components/fundraiser-card/fundraiser-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FundraiserCardComponent, AsyncPipe],
  template: `
    <!-- Modern Hero Section -->
    <section class="relative pt-24 pb-32 overflow-hidden bg-white">
      <!-- Background Decorations -->
      <div
        class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] bg-brand-green/5 rounded-full blur-[100px]"
      ></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <!-- Content Left -->
          <div class="lg:w-1/2 text-left">
            <div
              class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-sm font-bold mb-8"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"
                ></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              <span>Trusted by 5M+ Donors Worldwide</span>
            </div>

            <h1
              class="text-6xl sm:text-7xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tighter"
            >
              Fundraise for <br /><span class="text-brand-green italic">anything</span> that
              matters.
            </h1>

            <p class="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
              The ultimate platform for personal and community fundraising. Reach your goal faster
              with our zero platform fee model.
            </p>

            <div class="flex flex-wrap gap-4">
              <a
                routerLink="/create"
                class="px-8 py-4 bg-brand-green text-white font-black rounded-2xl shadow-2xl shadow-brand-green/40 hover:bg-brand-green-dark hover:-translate-y-1 transition-all duration-300"
              >
                Start a Fundraiser
              </a>
              <a
                routerLink="/search"
                class="px-8 py-4 bg-white border-2 border-gray-100 text-gray-900 font-bold rounded-2xl hover:border-brand-green/30 hover:bg-gray-50 transition-all duration-300"
              >
                Browse Causes
              </a>
            </div>

            <div class="mt-12 flex items-center gap-6">
              <div class="flex -space-x-3">
                <img
                  src="https://i.pravatar.cc/100?u=1"
                  class="h-12 w-12 rounded-full border-4 border-white shadow-sm"
                  alt="User"
                />
                <img
                  src="https://i.pravatar.cc/100?u=2"
                  class="h-12 w-12 rounded-full border-4 border-white shadow-sm"
                  alt="User"
                />
                <img
                  src="https://i.pravatar.cc/100?u=3"
                  class="h-12 w-12 rounded-full border-4 border-white shadow-sm"
                  alt="User"
                />
              </div>
              <p class="text-sm font-bold text-gray-400">
                Join 12,000+ happy organizers this month
              </p>
            </div>
          </div>

          <!-- Content Right -->
          <div class="lg:w-1/2 relative">
            <div
              class="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(2,169,92,0.15)] transform lg:rotate-3 hover:rotate-0 transition-transform duration-700"
            >
              <img
                src="https://www.developmentguild.com/assets/Core-Functions-of-Campaign-Team-Banner-Options_2000x1000_acf_cropped.png.webp"
                class="w-full h-[500px] object-cover"
                alt="Crowdfunding success"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>

              <!-- Floating Stats Badge -->
              <div
                class="absolute bottom-10 left-10 right-10 p-6 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"
              >
                <div class="flex justify-between items-center">
                  <div>
                    <p class="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">
                      Total Raised
                    </p>
                    <p class="text-2xl font-black text-gray-900">$12,492,004</p>
                  </div>
                  <div class="text-right">
                    <p class="text-xs font-black text-brand-green uppercase tracking-widest mb-1">
                      Growth
                    </p>
                    <p class="text-2xl font-black text-brand-green">+24%</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Decorative blobs -->
            <div
              class="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modern "How it Works" - High-End Card Layout -->
    <section class="py-32 bg-gray-50 overflow-hidden relative">
      <!-- Decorative background blur -->
      <div
        class="absolute top-1/4 -right-20 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <div class="max-w-2xl text-left">
            <h2 class="text-5xl font-black text-gray-900 mb-6 leading-tight">
              Fundraising on RaiseNow <br />is
              <span class="text-brand-green">simple and fast</span>
            </h2>
            <p class="text-xl text-gray-500 leading-relaxed font-medium">
              We've streamlined every step so you can focus on making a real difference.
            </p>
          </div>
          <div class="hidden lg:block pb-4">
            <a
              routerLink="/create"
              class="inline-flex items-center text-brand-green font-bold text-lg group"
            >
              Start your first step
              <svg
                class="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Step 1 Card -->
          <div class="group h-full">
            <div
              class="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 h-full border border-gray-100 flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-brand-green/20 hover:-translate-y-2"
            >
              <div
                class="absolute top-0 right-0 w-24 h-24 bg-brand-green/5 rounded-bl-[4rem] -mr-6 -mt-6 transition-all duration-500 group-hover:w-32 group-hover:h-32"
              ></div>

              <div
                class="h-14 w-14 bg-brand-green rounded-2xl flex items-center justify-center text-white text-2xl mb-6 relative z-10 shadow-lg shadow-brand-green/30 transform group-hover:rotate-6 transition-transform"
              >
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>

              <h3
                class="text-xl font-black text-brand-green mb-2 tracking-tighter uppercase opacity-30"
              >
                01
              </h3>
              <h4
                class="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-brand-green transition-colors"
              >
                Start Basics
              </h4>
              <p class="text-gray-500 text-base leading-relaxed font-medium mb-auto">
                Tell your story, set your goal, and add a photo or video.
              </p>

              <div class="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span class="text-xs font-black text-gray-400 uppercase tracking-widest"
                  >~2 min</span
                >
                <div class="h-2 w-2 rounded-full bg-brand-green/20"></div>
              </div>
            </div>
          </div>

          <!-- Step 2 Card -->
          <div class="group h-full">
            <div
              class="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 h-full border border-gray-100 flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-brand-green/20 hover:-translate-y-2"
            >
              <div
                class="absolute top-0 right-0 w-24 h-24 bg-brand-green/5 rounded-bl-[4rem] -mr-6 -mt-6 transition-all duration-500 group-hover:w-32 group-hover:h-32"
              ></div>

              <div
                class="h-14 w-14 bg-brand-green rounded-2xl flex items-center justify-center text-white text-2xl mb-6 relative z-10 shadow-lg shadow-brand-green/30 transform group-hover:-rotate-6 transition-transform"
              >
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </div>

              <h3
                class="text-xl font-black text-brand-green mb-2 tracking-tighter uppercase opacity-30"
              >
                02
              </h3>
              <h4
                class="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-brand-green transition-colors"
              >
                Share Story
              </h4>
              <p class="text-gray-500 text-base leading-relaxed font-medium mb-auto">
                Spread the word using our integrated social and email tools.
              </p>

              <div class="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span class="text-xs font-black text-gray-400 uppercase tracking-widest"
                  >Unlimited</span
                >
                <div class="h-2 w-2 rounded-full bg-brand-green/20"></div>
              </div>
            </div>
          </div>

          <!-- Step 3 Card -->
          <div class="group h-full">
            <div
              class="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 h-full border border-gray-100 flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-brand-green/20 hover:-translate-y-2"
            >
              <div
                class="absolute top-0 right-0 w-24 h-24 bg-brand-green/5 rounded-bl-[4rem] -mr-6 -mt-6 transition-all duration-500 group-hover:w-32 group-hover:h-32"
              ></div>

              <div
                class="h-14 w-14 bg-brand-green rounded-2xl flex items-center justify-center text-white text-2xl mb-6 relative z-10 shadow-lg shadow-brand-green/30 transform group-hover:rotate-12 transition-transform"
              >
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3
                class="text-xl font-black text-brand-green mb-2 tracking-tighter uppercase opacity-30"
              >
                03
              </h3>
              <h4
                class="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-brand-green transition-colors"
              >
                Get Funds
              </h4>
              <p class="text-gray-500 text-base leading-relaxed font-medium mb-auto">
                Accept donations securely and receive funds to your account.
              </p>

              <div class="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span class="text-xs font-black text-gray-400 uppercase tracking-widest"
                  >100% Secure</span
                >
                <div class="h-2 w-2 rounded-full bg-brand-green/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Fundraisers -->
    <section class="py-16 bg-gray-50 border-y border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Featured Fundraisers</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Discover stories that matter and people who need your support right now.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @if (featured$ | async; as featured) {
            @for (fundraiser of featured; track fundraiser.id) {
              <div class="h-full">
                <app-fundraiser-card [fundraiser]="fundraiser"></app-fundraiser-card>
              </div>
            }
          }
        </div>

        <div class="mt-12 text-center">
          <a
            routerLink="/search"
            class="text-brand-green font-semibold hover:text-brand-green-dark flex items-center justify-center"
          >
            See more fundraisers
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Categories / Trust / Divider -->
    <section class="py-16 bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
          <a
            href="#"
            class="p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all group border border-transparent hover:border-brand-green/20"
          >
            <span class="block text-2xl mb-2">💊</span>
            <span class="text-sm font-medium text-gray-700 group-hover:text-brand-green"
              >Medical</span
            >
          </a>
          <a
            href="#"
            class="p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all group border border-transparent hover:border-brand-green/20"
          >
            <span class="block text-2xl mb-2">🆘</span>
            <span class="text-sm font-medium text-gray-700 group-hover:text-brand-green"
              >Emergency</span
            >
          </a>
          <a
            href="#"
            class="p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all group border border-transparent hover:border-brand-green/20"
          >
            <span class="block text-2xl mb-2">🎓</span>
            <span class="text-sm font-medium text-gray-700 group-hover:text-brand-green"
              >Education</span
            >
          </a>
          <a
            href="#"
            class="p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all group border border-transparent hover:border-brand-green/20"
          >
            <span class="block text-2xl mb-2">🐾</span>
            <span class="text-sm font-medium text-gray-700 group-hover:text-brand-green"
              >Animals</span
            >
          </a>
          <a
            href="#"
            class="p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all group border border-transparent hover:border-brand-green/20"
          >
            <span class="block text-2xl mb-2">🕊️</span>
            <span class="text-sm font-medium text-gray-700 group-hover:text-brand-green"
              >Memorial</span
            >
          </a>
          <a
            href="#"
            class="p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all group border border-transparent hover:border-brand-green/20"
          >
            <span class="block text-2xl mb-2">🌱</span>
            <span class="text-sm font-medium text-gray-700 group-hover:text-brand-green"
              >Environment</span
            >
          </a>
        </div>
      </div>
    </section>

    <!-- Success Stories Section -->
    <section class="py-24 bg-brand-green text-white overflow-hidden relative">
      <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div
          class="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-96 h-96 bg-brand-green-dark rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col md:flex-row items-center gap-16">
          <div class="md:w-1/2 w-full">
            <div class="relative group">
              <div
                class="absolute -inset-4 bg-white/20 rounded-3xl blur-xl group-hover:bg-white/30 transition-all duration-500"
              ></div>
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800"
                class="rounded-2xl shadow-2xl relative z-10 w-full"
                alt="Success story"
              />
            </div>
          </div>
          <div class="md:w-1/2">
            <div
              class="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white font-bold text-sm mb-6 uppercase tracking-wider backdrop-blur-sm"
            >
              Impact Story
            </div>
            <h2 class="text-4xl font-extrabold mb-6 leading-tight">Real stories, real results</h2>
            <div class="relative">
              <span class="absolute -top-10 -left-6 text-9xl text-white/10 font-serif">"</span>
              <p
                class="text-2xl text-white/90 mb-8 italic font-medium leading-relaxed relative z-10"
              >
                Thanks to RaiseNow, we were able to provide community meals to over 500 families
                during the holidays. The platform made it so easy to reach our community.
              </p>
            </div>
            <div class="flex items-center">
              <div class="h-14 w-14 rounded-full border-2 border-white/40 p-1 mr-4 shadow-lg">
                <div
                  class="h-full w-full rounded-full bg-white/20 flex items-center justify-center font-bold text-xl"
                >
                  ER
                </div>
              </div>
              <div>
                <p class="font-bold text-xl">Ellen R.</p>
                <p class="text-white/70 font-medium">Community Organizer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modern Guarantee / Trust Section -->
    <section class="py-24 bg-white border-t border-gray-100 overflow-hidden relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2">
            <div
              class="inline-flex items-center px-4 py-2 rounded-full bg-brand-green/10 text-brand-green font-bold text-sm mb-6 uppercase tracking-wider"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              Standard of Trust
            </div>
            <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              The <span class="text-brand-green">RaiseNow</span> Guarantee
            </h2>
            <p class="text-xl text-gray-600 mb-10 leading-relaxed">
              We provide the first and only guarantee for social fundraising. We've got your
              back—from donating to receiving funds.
            </p>

            <ul class="space-y-6 mb-10">
              <li class="flex items-start">
                <div
                  class="flex-shrink-0 h-8 w-8 rounded-full bg-brand-green flex items-center justify-center text-white mt-1"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-bold text-gray-900">Donor Protection</h4>
                  <p class="text-gray-600">
                    In the rare case that something isn't right, we will refund your donation.
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div
                  class="flex-shrink-0 h-8 w-8 rounded-full bg-brand-green flex items-center justify-center text-white mt-1"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-bold text-gray-900">Beneficiary Protection</h4>
                  <p class="text-gray-600">
                    If a fundraiser organizer doesn't deliver funds, we'll make sure they reach the
                    right person.
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div
                  class="flex-shrink-0 h-8 w-8 rounded-full bg-brand-green flex items-center justify-center text-white mt-1"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-bold text-gray-900">Expert Review</h4>
                  <p class="text-gray-600">
                    Our team works around the clock to prevent fraud and help you give with
                    confidence.
                  </p>
                </div>
              </li>
            </ul>

            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                class="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-bold rounded-xl hover:bg-brand-green-dark transition-all shadow-lg hover:shadow-xl"
              >
                Learn more about our guarantee
              </a>
            </div>
          </div>

          <div class="lg:w-1/2 relative">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src="https://www.biddingowl.com/hubfs/Happy%20volunteer%20team%20smiling%20together.jpeg"
                (error)="handleTrustImageError($event)"
                class="w-full h-full object-cover aspect-square md:aspect-video lg:aspect-square"
                alt="Trust and community"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-brand-green/40 to-transparent"
              ></div>

              <!-- Floating badge -->
              <div
                class="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="h-12 w-12 bg-brand-green rounded-full flex items-center justify-center text-white text-2xl"
                  >
                    ✓
                  </div>
                  <div>
                    <p class="text-sm font-bold text-gray-900 uppercase tracking-widest">
                      Guaranteed
                    </p>
                    <p class="text-gray-600 font-medium leading-tight">
                      Your donations are safe with the RaiseNow community.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Decorative circle -->
            <div
              class="absolute -top-10 -right-10 h-32 w-32 bg-brand-green/10 rounded-full blur-2xl"
            ></div>
            <div
              class="absolute -bottom-10 -left-10 h-48 w-48 bg-brand-green/10 rounded-full blur-3xl"
            ></div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Home {
  private fundraiserService = inject(FundraiserService);
  featured$ = this.fundraiserService.getFeatured();

  handleTrustImageError(event: any) {
    event.target.src =
      'https://images.unsplash.com/photo-1582213726892-25b796d74633?auto=format&fit=crop&q=80&w=1200';
  }
}
