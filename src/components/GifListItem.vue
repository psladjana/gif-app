<template>
  <router-link
    :to="`/gif/${gif.id}`"
    :style="{ 'background-image': 'url(' + gif.images.original.url + ')' }"
    class="gif-holder">
    <img
      src="@/assets/images/spinner.gif" alt="Loading..."
      v-if="loading"
      class="gif-holder__loading-image"
      />
  </router-link>
</template>

<script>
export default {
  name: 'GifListItem',
  props: {
    gif: Object,
    loading: Boolean,
  },
}
</script>
<style scoped lang="scss">
@import '@/assets/style/main.scss';
.gif-holder {
  height: 150px;
  width: 200px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  @include transition(opacity 0.5s ease-in-out);
  &:hover {
    opacity: 0.6
  }
  &__loading-image {

    width: 50px;
  }
}
</style>
