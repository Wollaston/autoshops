<script lang="ts">
  export let name: string
  export let address: string
  export let rating: number
  export let num_ratings: number
</script>

<div class="card card-side bg-base-100 shadow-xl m-2 p-3">
  <figure class="w-1/4">
    <img
      src="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Car"
      class="rounded object-contain"
    />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>{address}</p>
    <p>{rating}/10 Stars</p>
    <p>{num_ratings} Total Ratings</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Bid</button>
    </div>
  </div>
</div>
