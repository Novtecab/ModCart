<script setup lang="ts">
import { ref, onMounted } from 'vue'

const categories = ref<any[]>([])

async function getCategories() {
  const response = await fetch('/.netlify/functions/api/categories')
  const data = await response.json()
  categories.value = data || []
}

onMounted(() => {
  getCategories()
})
</script>

<template>
  <div class="category-list">
    <ul class="space-y-2">
      <li v-for="category in categories" :key="category.id">
        <RouterLink :to="`/category/${category.name}`" class="block p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200">
          {{ category.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* No scoped styles needed as Tailwind CSS classes are used directly in the template */
</style>
