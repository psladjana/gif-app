<template>
   <Carousel
    :autoplay="true"
    :autoplayTimeout="5000"
    :scrollPerPage="true"
    :navigationEnabled="true"
    :paginationEnabled="false"
    :loop="true"
    :perPageCustom="[[480, 1], [768, 3], [992, 4]]">
      <Slide
        v-for="gif in gifs"
        :key="gif.id">
        <GifListItem :gif="gif" :loading='loading'/>
      </Slide>
    </Carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import GifListItem from '@/components/GifListItem.vue';

export default {
  name: 'GifList',
  components: {
    GifListItem,
    Carousel,
    Slide,
  },
  props: {
    gifs: Array,
    loading: Boolean,
  },
};
</script>
