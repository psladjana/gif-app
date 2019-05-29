<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/main.scss';
#app {
  text-align: center;
}
.content {
    max-width: $screen-md;
    margin: $margin-base auto;
    &__heading {
      margin: $margin-base auto;
    }
}
%link-hover {
  color: $brand-primary !important;
}
#nav {
  background-color: $background-darker;
  padding: $padding-base;
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: $brand-secundary;
    }
    &:hover {
      @extend %link-hover;
    }
  }
}
.VueCarousel {
  margin: $margin-base 0;
  &-navigation-button {
    color: $brand-secundary !important;
    &:hover {
      @extend %link-hover;
    }
  }
}
@media (max-width: $screen-xs) {
    .VueCarousel-navigation {
      display: none;
    }
  }
</style>
