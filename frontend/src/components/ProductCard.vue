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
  <Card>
    <CardHeader>
      <CardTitle>{{ product.name }}</CardTitle>
      <CardDescription>{{ product.price }}</CardDescription>
    </CardHeader>
    <CardContent>
      <img :src="product.image" :alt="product.name" />
    </CardContent>
    <CardFooter>
      <Button>
        <Checkout />
      </Button>
    </CardFooter>
  </Card>
</template>
