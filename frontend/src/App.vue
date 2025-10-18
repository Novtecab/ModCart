<script setup lang="ts">
import { RouterView } from 'vue-router'
import CategoryList from '@/components/CategoryList.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-background text-text font-sans">
    <!-- Header -->
    <header class="bg-white shadow-sm py-4">
      <div class="container mx-auto flex justify-between items-center px-4">
        <RouterLink to="/" class="text-2xl font-serif font-bold text-primary">ModCart</RouterLink>
        <nav>
          <ul class="flex space-x-6">
            <li><RouterLink to="/" class="text-text hover:text-primary transition-colors duration-200">Home</RouterLink></li>
            <li><RouterLink to="/products" class="text-text hover:text-primary transition-colors duration-200">Products</RouterLink></li>
            <li><RouterLink to="/about" class="text-text hover:text-primary transition-colors duration-200">About</RouterLink></li>
            <li><RouterLink to="/contact" class="text-text hover:text-primary transition-colors duration-200">Contact</RouterLink></li>
          </ul>
        </nav>
        <div class="flex items-center space-x-4">
          <!-- Search Icon (example) -->
          <button class="text-text hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <!-- Cart Icon (example) -->
          <button class="text-text hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="container mx-auto flex-grow px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Sidebar for Categories -->
        <aside class="md:col-span-1 bg-white p-6 rounded-lg shadow-sm border border-border">
          <h2 class="text-xl font-semibold text-text mb-4 font-serif">Categories</h2>
          <CategoryList />
        </aside>

        <!-- Main Router View -->
        <section class="md:col-span-3">
          <RouterView />
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="w-full py-8 bg-primary text-white text-center">
      <div class="container mx-auto px-4">
        <p class="text-lg font-serif mb-2">&copy; 2025 ModCart. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-4">
          <a href="#" class="text-white hover:text-accent transition-colors duration-200">Privacy Policy</a>
          <a href="#" class="text-white hover:text-accent transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  </div>
</template>
