import { ref, onMounted } from 'vue'
import { loadStripe, type Stripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
const stripe = ref<Stripe | null>(null)

export function useStripe() {
  onMounted(async () => {
    stripe.value = await stripePromise
  })

  return {
    stripe
  }
}
