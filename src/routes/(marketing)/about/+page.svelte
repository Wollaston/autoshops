<script lang="ts">
  import type { LatLngExpression } from "leaflet"
  import Leaflet from "$lib/Leaflet.svelte"

  const initialView: LatLngExpression = [28.538336, -81.379234]
</script>

<div class="hero pt-10 bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-lg">
      <h1 class="text-5xl font-bold">About Us</h1>
      <p class="py-6">
        AutoShops.com is commited to solving the issue of trust in the auto
        repair industry. With its years of experience, AutoShops.com has
        designed a comprehensive vetting process and review platform that
        encourages real customers to share their experiences with local repair
        shops. And with its automated bidding process, car owners can quickly
        and easily find the best price or the next appointment whenever they
        have car trouble.
      </p>
      <p class="py-6">
        Headquartered in Orlando, FL, we work with both car owners and auto
        shops to reduce friction and modernize the care repair industry.
      </p>
      <p class="py-6">Ready to get started? Register for an accout today!</p>
      <div class="mt-6 md:mt-2">
        <a href="/account">
          <button class="btn btn-primary btn-sm px-6">Car Owners</button>
        </a>
        <a href="/account">
          <button class="btn btn-primary btn-sm px-6">Auto Shops</button>
        </a>
      </div>
    </div>
  </div>
</div>
<div class="w-full h-screen">
  <Leaflet view={initialView} zoom={14}></Leaflet>
</div>
