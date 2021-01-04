<template>
  <div>
      {{text}}
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

</style>
