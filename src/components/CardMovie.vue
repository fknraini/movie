<template>
  <div class="card shadow card-moviee">
    <img
      :src="film.show.image.original"
      class="card-img-top"
      alt="film-cover"
    />
    <div class="card-body">
      <h2 class="card-title">{{ film.show.name }}</h2>
      <a :href="film.show.officialSite" class="btn btn-success">Lihat</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMovie",
  props: ["film"],
};
</script>

<style scoped>
.card-moviee {
  border-radius: 1rem;
}

.card-img-top {
 border-top-right-radius: 1rem;
 border-top-left-radius: 1rem; 
 height: 31.25rem;
 max-width: 100%;
 object-fit: cover;
}

</style>
