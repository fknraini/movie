<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2 class="title">
                Choose your <strong>Favorite Movie</strong>
              </h2>
              <p>Ayo segera lihat film favorit Anda</p>
              <router-link class="btn btn-lg btn-success" to="/movies">
                <b-icon-arrow-right></b-icon-arrow-right>Lihat Film
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/movie1.png" width="500" alt="movie" />
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile -->
  <div class="d-sm-block d-md-none">
    <div class="row mt-4">
      <div class="col-md-6">
        <img src="../assets/movie1.png" width="100%" alt="movie" />
      </div>
      <div class="col-md-6">
        <div class="d-flex h-100">
          <div class="justify-content-center align-self-center">
            <h2 class="title">Choose your <strong>Favourite Movie</strong></h2>
            <p>Ayo segera lihat film favorit Anda</p>
            <button class="btn btn-lg btn-success">Lihat Film</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hero",
};
</script>

<style></style>
