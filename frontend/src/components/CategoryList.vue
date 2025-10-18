<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const categories = ref<any[]>([])

async function getCategories() {
  const { data } = await supabase.from('categories').select()
  categories.value = data || []
}

onMounted(() => {
  getCategories()
})
</script>

<template>
  <div class="category-list">
    <h3>Categories</h3>
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.category-list {
  padding: 1rem;
}
</style>
