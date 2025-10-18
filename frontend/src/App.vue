<script setup lang="ts">
import { RouterView } from 'vue-router'
import CategoryList from '@/components/CategoryList.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen font-sans text-gray-800 bg-gray-50">
    <!-- Header -->
    <header class="w-full py-4 bg-white shadow-md">
      <div class="container mx-auto flex justify-between items-center px-4">
        <RouterLink to="/" class="text-2xl font-bold text-gray-900">ModCart</RouterLink>
        <nav>
          <ul class="flex space-x-4">
            <li><RouterLink to="/" class="text-gray-600 hover:text-gray-900">Home</RouterLink></li>
            <li><RouterLink to="/about" class="text-gray-600 hover:text-gray-900">About</RouterLink></li>
            <!-- Add more navigation links as needed -->
          </ul>
        </nav>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="container mx-auto flex-grow px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Sidebar for Categories -->
        <aside class="md:col-span-1 bg-white p-6 rounded-lg shadow-sm">
          <h2 class="text-xl font-semibold mb-4">Categories</h2>
          <CategoryList />
        </aside>

        <!-- Main Router View -->
        <section class="md:col-span-3">
          <RouterView />
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="w-full py-6 bg-gray-800 text-white text-center">
      <div class="container mx-auto px-4">
        <p>&copy; 2025 ModCart. All rights reserved.</p>
        <!-- Add more footer content or links here -->
      </div>
    </footer>
  </div>
</template>
