<template>
  <div class='detail' @click="$router.back()">
      {{text}}
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Dtail',
    setup() {
        return {
            text: 123,
        };
    },
});
</script>

<style scoped lang="less">
.detail {
    height: 100vh;
    background: red;
     position: absolute;
     width: 100%;
}
</style>
