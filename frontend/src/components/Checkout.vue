<script setup lang="ts">
import { useStripe } from '@/composables/useStripe'

const { stripe } = useStripe()

async function checkout() {
  if (!stripe.value) {
    return
  }

  const { error } = await stripe.value.redirectToCheckout({
    lineItems: [{ price: 'YOUR_PRICE_ID', quantity: 1 }],
    mode: 'payment',
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  })

  if (error) {
    console.error(error)
  }
}
</script>

<template>
  <div @click="checkout">Checkout</div>
</template>
