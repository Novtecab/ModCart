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
  <div class="product-list">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
</style>
