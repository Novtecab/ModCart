<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProductCard from './ProductCard.vue'

const products = ref<any[]>([])

async function getProducts() {
  const response = await fetch('/.netlify/functions/api/products')
  const data = await response.json()
  products.value = data || []
}

onMounted(() => {
  getProducts()
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<style scoped>
/* No scoped styles needed as Tailwind CSS classes are used directly in the template */
</style>
