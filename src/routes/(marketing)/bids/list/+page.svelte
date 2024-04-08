<script lang="ts">
  import ShopCard from "$lib/ShopCard.svelte"

  import { info } from "./shops"
  const autoShops = [
    {
      name: "Mike's Auto",
      address: "1234 Main Street, Orlando, FL 32222",
      rating: 8.8,
      num_ratings: 145,
    },
    {
      name: "Paul & Son's Auto",
      address: "800 International Drive, Orlando, FL 32121",
      rating: 7.5,
      num_ratings: 23,
    },
  ]
</script>

<svelte:head>
  <title>{info.name}</title>
  <meta name="description" content="Your Bids" />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-lg mx-auto">
  <div
    class="text-3xl lg:text-5xl font-medium text-primary flex gap-3 items-baseline text-center place-content-center"
  >
    <div
      class="text-center leading-relaxed font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      {info.name}
    </div>
  </div>

  {#each autoShops as shop}
    <ShopCard
      name={shop.name}
      address={shop.address}
      rating={shop.rating}
      num_ratings={shop.num_ratings}
    />
  {/each}
</div>
