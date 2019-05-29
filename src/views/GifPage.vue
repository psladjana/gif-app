<template>
  <div class="content" v-if="gif">
    <h1 class="content__heading"> {{ this.title }} </h1>
    <img
      v-if="loading"
      src="@/assets/images/spinner.gif"
      alt="Loading..."
    />
    <img
      v-if="!loading"
      :src="gif.images.original.url"
      :alt="gif.title"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'GifPage',
  data: () => ({
    id: null
  }),
  computed: {
    ...mapGetters(['gif', 'loading']),
    title () {
      if(this.gif.title == ''){
        let slug = this.gif.slug
        return slug.replace('-' + this.id, '')
      } else return this.gif.title
    }
  },
  created () {
    this.id = this.$route.params.id;
    this.setGif(this.id)
  },
  methods: {
    ...mapActions(['setGif']),

  }
}
</script>

<style scoped lang="scss">

</style>
