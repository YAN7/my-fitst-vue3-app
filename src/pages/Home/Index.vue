<template>
  <div class="home">
      <router-link to='/detail'>detail</router-link>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    setup() {
        return {
            text: 123,
        };
    },
});
</script>

<style scoped lang="less">
.home {
    height: 100vh;
    background: green;
    position: absolute;
     width: 100%;
}
</style>
