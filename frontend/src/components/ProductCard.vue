<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Checkout from './Checkout.vue'

defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
    <img :src="product.image" :alt="product.name" class="w-full h-56 object-cover" />
    <div class="p-5">
      <h3 class="text-xl font-serif font-semibold text-text mb-2">{{ product.name }}</h3>
      <p class="text-primary text-lg font-bold mb-4">${{ product.price }}</p>
      <Button class="w-full bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded-md transition-colors duration-200">
        <Checkout />
      </Button>
    </div>
  </div>
</template>
