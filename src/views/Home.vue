<template>
  <div class="content">
    <h1 class="content__heading">Tranding Gifs</h1>
    <GifsList :gifs="gifs" :loading='loading' />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import GifsList from '@/components/GifsList.vue';

export default {
  name: 'Home',
  components: {
    GifsList,
  },
  computed: {
    ...mapGetters(['gifs', 'loading']),
  },
  methods: {
    ...mapActions(['setGifs']),
  },
  mounted() {
    this.setGifs();
  },
};
</script>
