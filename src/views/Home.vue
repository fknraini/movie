<template>
  <Navbar />
  <div class="container">
    <Hero />

    <div class="row mt-4">
      <div class="col">
        <h2>
          Best
          <strong>Movies</strong>
        </h2>
      </div>
      <div class="col">
        <router-link to="/movies" class="btn btn-success float-end">
          <b-icon-eye></b-icon-eye>Lihat Semua
        </router-link>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-4 mt-4" v-for="film in films" :key="film.show.id">
        <CardMovie :film="film" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardMovie from "@/components/CardMovie.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    CardMovie,
  },
  data() {
    return {
      films: [],
    };
  },
  methods: {
    setFilm(data) {
      this.films = data;
    },
  },
  mounted() {
    axios
      .get("http://api.tvmaze.com/search/shows?q=girls")
      .then((response) => {
        this.setFilm(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
