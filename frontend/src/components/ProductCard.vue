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
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ product.name }}</h3>
      <p class="text-gray-700 text-sm mb-4">${{ product.price }}</p>
      <Button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        <Checkout />
      </Button>
    </div>
  </div>
</template>
