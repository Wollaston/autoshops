<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <div>
      <h1 class="text-5xl font-bold w-lg">Get Bids</h1>
      <form method="post" class="w-full">
        <label class="form-control w-full max-w-lg">
          <div class="label">
            <span class="label-text">VIN</span>
          </div>
          <input
            type="text"
            placeholder="VIN"
            class="input input-bordered w-full max-w-lg"
          />
        </label>
        <label class="form-control w-full max-w-lg">
          <div class="label">
            <span class="label-text">Engine Codes</span>
          </div>
          <textarea
            placeholder="Engine Codes"
            class="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
        </label>
        <button class="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  </div>
</div>
