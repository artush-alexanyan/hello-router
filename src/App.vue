<template>
  <div id="app">
    <div id="nav">
      <div class="container mt-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <router-link class="breadcrumb-item" tag="li" to="/">Home</router-link>
            <router-link class="breadcrumb-item" tag="li" to="/about">About</router-link>
            <router-link class="breadcrumb-item" tag="li" to="/all-flowers">All flowers</router-link>
            <router-link class="breadcrumb-item" tag="li" to="/secret">Secret</router-link>
          </ol>
        </nav>
        </div>
    </div>
        <transition
         name="fade"
         mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
       >
         <router-view/>
       </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      prevHeight: 0,
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
};
</script>
<style>
 .fade-enter-active,
 .fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
 }
li{
  cursor: pointer;
}
li.router-link-exact-active {
  color: brown;
  cursor: pointer;
  padding: 5px;
}
</style>
